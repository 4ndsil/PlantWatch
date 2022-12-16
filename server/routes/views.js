const express = require("express");
const router = express.Router();
const { getDevice, getAllDevices } = require("../services/device");

router.get("/dashboard/:id", async (req, res) => {
  let device = await getDevice(req.params.id);
  if (device) {
    res.render("dashboard", { device: device });
  } else {
    res.redirect("/");
  }
});

router.get("/", async (req, res) => {
  let devices = await getAllDevices();
  res.render("home", { devices: devices });
});

module.exports = router;
