const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

//db models
const luxModel = require('../models/lux')
const moisture = require('../models/moisture')

const CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(CONNECTION_STRING)

//lux endpoints
router.get("/lux/:id", async (req, res) => {
    try {
        const data = await luxModel.find({
            deviceId: req.params.id
        })
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
    const {
        lux,
        deviceId
    } = req.body
    try {
        const data = await luxModel.create({
            lux,
            deviceId,
            date: Date()
        })
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
router.get("/moisture/:id", async (req, res) => {
    try {
        const data = await moisture.find({
            deviceId: req.params.id
        })
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
    const {
        moisture,
        deviceId
    } = req.body
    try {
        const data = await moisture.create({
            moisture,
            deviceId,
            Date: Date()
        })
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