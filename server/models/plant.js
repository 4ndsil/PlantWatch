/*const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    common_name: [{
        type: String
    }],
    latin_name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    origin: [{
        type: String
    }],
    img: {
        type: String,
    },
    watering: {
        type: String
    },
    light_ideal: {
        type: String
    },
    light_tolered: {
        type: String
    },
    pruning: {
        type: String
    },
    familiy: {
        type: String
    },
    bearing: {
        type: String
    },
    temperature: {
        F: Number,
        C: Number
    }
}, {
    collection: 'plants'
})

const plant = mongoose.model("PlantModel", PlantSchema);

module.exports = plant;*/