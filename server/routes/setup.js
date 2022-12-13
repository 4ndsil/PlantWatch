const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const {
    plantId,
    deviceId,
  } = req.body
  res.cookie('plantId', `${plantId}`, {
    maxAge: 900000,
    httpOnly: true
  });
  res.cookie('deviceId', `${deviceId}`, {
    maxAge: 900000,
    httpOnly: true
  });
  res.redirect("/");  
});

module.exports = router;