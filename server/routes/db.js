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

module.exports = router;