const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    deviceId: String,
    name: String,
    plant: String,
    ip: String,
  },
  { collection: "device" }
);

const device = mongoose.model("Device", deviceSchema);

module.exports = device;
