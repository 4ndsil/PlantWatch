const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

//db models
const lux = require('../models/lux')
const moisture = require('../models/moisture')

const CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(CONNECTION_STRING)

//lux endpoints
router.get("/lux/", async (req, res) => {
    try {
        const data = await lux.find({deviceId: req.cookies.deviceId})
        res.status(200).json({
            success: true,
            data,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

router.post("/lux", async (req, res) => {
    try {
        const data = await lux.create(req.body)
        await data.save();
        res.status(201).json({
            success: true,
            data: data
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

//moisture endpoints
router.get("/moisture/", async (req, res) => {
    try {
        const data = await moisture.find({deviceId: req.cookies.deviceId})
        res.status(200).json({
            success: true,
            data,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

router.post("/moisture", async (req, res) => {
    try {
        const data = await moisture.create(req.body)
        await data.save();
        res.status(201).json({
            success: true,
            data: data
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;