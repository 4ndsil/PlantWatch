const device = require("../models/device");

const parseRaw = (raw) => {
  const parsed = JSON.parse(raw._doc.plant.replace(/\\"/g, '"'));
  delete raw._doc.plant;
  let { img, id, ...info } = parsed;
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

module.exports = {
  getDevice,
  getAllDevices,
};
