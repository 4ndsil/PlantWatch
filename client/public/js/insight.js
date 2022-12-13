async function moistureReasoning(sensorValue, apiValue) {

    let recommendedValues = [
        "Keep moist between watering & Can dry between watering",
        "Water when soil is half dry & Can dry between watering",
        "Water when soil is half dry & Change water regularly in the cup",
        "Keep moist between watering & Water when soil is half dry",
        "Keep moist between watering & Must not dry between watering",
        "Must dry between watering & Water only when dry",
        "Change water regularly in the cup & Water when soil is half dry"
    ];

    let plantMoistureReport = {
        "Soil status": "",
        "Watering required": "",
    }

    if (sensorValue < 560)
        plantMoistureReport["Soil status"] = "Very dry"

    if (559 < sensorValue && sensorValue < 920)
        plantMoistureReport["Soil status"] = "Dry"

    if (919 < sensorValue && sensorValue < 1280)
        plantMoistureReport["Soil status"] = "Half dry"

    if (1279 < sensorValue && sensorValue < 1640)
        plantMoistureReport["Soil status"] = "Moist"

    if (1639 < sensorValue && sensorValue < 2000)
        plantMoistureReport["Soil status"] = "Wet"

    if (1999 < sensorValue)
        plantMoistureReport["Soil status"] = "Just watered"

    if (apiValue == recommendedValues[0] || apiValue == recommendedValues[3] || apiValue == recommendedValues[4])
        if (sensorValue < 1279)
            plantMoistureReport["Watering required"] = "Yes <i class='bi bi-exclamation-triangle'></i>"
        else
            plantMoistureReport["Watering required"] = "No"

    if (apiValue == recommendedValues[1] || apiValue == recommendedValues[2] || apiValue == recommendedValues[6])
        if (sensorValue < 919)
            plantMoistureReport["Watering required"] = "Yes <i class='bi bi-exclamation-triangle'></i>"
        else
            plantMoistureReport["Watering required"] = "No"

    if (apiValue == recommendedValues[5])
        if (sensorValue < 559)
            plantMoistureReport["Watering required"] = "Yes <i class='bi bi-exclamation-triangle'></i>"
        else
            plantMoistureReport["Watering required"] = "No"

    const tbody = document.getElementById("moisture-table")

    for (const [key, value] of Object.entries(plantMoistureReport)) {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        let td = document.createElement("td")


        tbody.appendChild(tr)
        tr.appendChild(th)
        tr.appendChild(td)

        th.innerText = key
        td.innerHTML = value
    }
}

async function luxReasoning(sensorValue, apiValue) {

    let recommendedLuxValues = [
        "Diffuse light ( Less than 5,300 lux / 500 fc)",
        "Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)",
        "Full sun (+21,500 lux /+2000 fc )",
    ];

    let plantLightReport = {
        "Position status": "",
        "Light exposure": "",
    }

    if (sensorValue < 5300)
        plantLightReport["Position status"] = "Diffuse light"

    if (5299 < sensorValue && sensorValue < 21500)
        plantLightReport["Position status"] = "Strong light"

    if (21499 < sensorValue)
        plantLightReport["Position status"] = "Full sun"

    if (apiValue == recommendedLuxValues[0])
        if (sensorValue < 5300)
            plantLightReport["Light exposure"] = "Satisfied"
        else
            plantLightReport["Light exposure"] = "Less light needed <i class='bi bi-exclamation-triangle'></i>"

    if (apiValue == recommendedLuxValues[1])
        if (5299 < sensorValue && sensorValue < 21500)
            plantLightReport["Light exposure"] = "Satisfied"
        else if (sensorValue < 5230)
            plantLightReport["Light exposure"] = "More light needed <i class='bi bi-exclamation-triangle'></i>"
        else if (21499 < sensorValue)
            plantLightReport["Light exposure"] = "Less light needed <i class='bi bi-exclamation-triangle'></i>"

    if (apiValue == recommendedLuxValues[2])
        if (21499 < sensorValue)
            plantLightReport["Light exposure"] = "Satisfied"
        else
            plantLightReport["Light exposure"] = "More light needed <i class='bi bi-exclamation-triangle'></i>"

    const tbody = document.getElementById("light-table")

    for (const [key, value] of Object.entries(plantLightReport)) {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        let td = document.createElement("td")

        tbody.appendChild(tr)
        tr.appendChild(th)
        tr.appendChild(td)

        th.innerText = key
        td.innerHTML = value
    }
}

document.getElementById("plantinfo-spinner").remove()