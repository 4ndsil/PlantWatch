const express = require("express");
const router = express.Router();
const { getDevice, updateDevicePlant } = require("../services/device");

router.get("/:id", async (req, res) => {
  let device = await getDevice(req.params.id);
  if (device) {
    res.render("configure", { device: device });
  } else {
    res.redirect("/");
  }
});

router.post("/:id", async (req, res) => {
  let device = await getDevice(req.params.id);
  if (device) {
    const status = await updateDevicePlant({
      deviceId: req.params.id,
      plant: req.body.plant,
    });
    res.render("configure", { device: device, update: status.acknowledged });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
