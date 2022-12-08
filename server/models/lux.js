const mongoose = require('mongoose');

const luxSchema = new mongoose.Schema({
    id: String,
    lux: Number,
    date: Date,
    deviceId: String
}, { collection: 'lux' })

const lux = mongoose.model("Lux", luxSchema);

module.exports = lux;