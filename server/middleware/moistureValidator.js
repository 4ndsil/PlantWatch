function checkMoisture(req, res) {
    const {
        apiValue,
        sensorValue
    } = req.body
    console.log("apiValue:", apiValue)
    let recommendedValues = [
        "Keep moist between watering & Can dry between watering",
        "Water when soil is half dry & Can dry between watering",
        "Water when soil is half dry & Change water regularly in the cup",
        "Keep moist between watering & Water when soil is half dry",
        "Keep moist between watering & Must not dry between watering",
        "Must dry between watering & Water only when dry",
        "Change water regularly in the cup & Water when soil is half dry"
    ];    
    
    let plantSoilReport = {
        "Soil status" : "",
        "Watering required": "",
    }  

    if (sensorValue < 560){
        plantSoilReport["Soil status"] = "Very dry"
    }

    if (559 < sensorValue && sensorValue < 920){
        plantSoilReport["Soil status"] = "Dry"
    }

    if (919 < sensorValue && sensorValue < 1280){
        plantSoilReport["Soil status"] = "Half dry"
    }

    if (1279 < sensorValue && sensorValue < 1640){
        plantSoilReport["Soil status"] = "Moist"
    }

    if (1639 < sensorValue && sensorValue < 2000){
        plantSoilReport["Soil status"] = "Wet"
    }

    if (2000 < sensorValue){
        plantSoilReport["Soil status"] = "Just watered"
    }

    if (apiValue == recommendedValues[0] || apiValue == recommendedValues[3] || apiValue == recommendedValues[4]) {
        if (sensorValue < 1279){
            plantSoilReport["Watering required"] = "Yes"
        }
        else {
            plantSoilReport["Watering required"] = "No"
        }
    }

    if (apiValue == recommendedValues[1]|| apiValue == recommendedValues[2] || apiValue == recommendedValues[6] ) {
        if (sensorValue < 919){
            plantSoilReport["Watering required"] = "Yes"
        }
        else {
            plantSoilReport["Watering required"] = "No"
        }
    }

    if (apiValue == recommendedValues[5]) {
        if (sensorValue < 559){
            plantSoilReport["Watering required"] = "Yes"
        }
        else {
            plantSoilReport["Watering required"] = "No"
        }
    }
    
    return plantSoilReport    
};

module.exports = checkMoisture;