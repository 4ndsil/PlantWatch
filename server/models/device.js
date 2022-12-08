const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    id: String,    
    date: Date,    
}, { collection: 'device' })

const device = mongoose.model("Device", deviceSchema);

module.exports = device;