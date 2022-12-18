const device = require("../models/device");

const parseRaw = (raw) => {
  const parsed = JSON.parse(raw._doc.plant.replace(/\\"/g, '"'));
  delete raw._doc.plant;
  let { img, id, ...info } = parsed;
  Object.keys(info).forEach((k) => {
    if (typeof info[k] === "object")
      info[k] = JSON.stringify(info[k]).replace(/[{}\"[\]]/g, "");
  });
  return {
    plant: {
      info: info,
      img: img,
    },
    ...raw._doc,
  };
};

const getDevice = async (deviceId) => {
  let raw = await device.findOne({ deviceId: deviceId });

  if (raw) {
    return parseRaw(raw);
  }
  return null;
};

const getAllDevices = async () => {
  let data = await device.find();
  return data.map((raw) => parseRaw(raw));
};

const updateDevicePlant = async ({ deviceId, plant }) => {
  return await device.updateOne({ deviceId: deviceId }, { plant: plant });
};

module.exports = {
  getDevice,
  getAllDevices,
  updateDevicePlant,
};
