const mongoose = require('mongoose');

const moistureSchema = new mongoose.Schema({
    id: String,
    moisture: Number,
    date: Date,
    deviceId: String
}, {
    collection: 'moisture'
})

const moisture = mongoose.model("Moisture", moistureSchema);

module.exports = moisture;