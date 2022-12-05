const plant = {
    plant_id: String,
    plant_name: String,
    plant_origin: String,
    plant_watering: String,    
};

const plantData = mongoose.model(
      "PlantData", plant);