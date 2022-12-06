const mongoose = require('mongoose');

const moistureSchema = new mongoose.Schema({
    id: String,
    moisture: Number    
}, { collection: 'moisture' })

const moisture = mongoose.model("Moisture", moistureSchema);

module.exports = moisture;