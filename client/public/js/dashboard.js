async function endpoints() {
    const lux = await fetch("/api/db/lux").then(r => r.json())

    const moisture = await fetch("/api/db/moisture").then(r => r.json())    
    setLuxChart(lux.data)
    setMoistureChart(moisture.data)
    
    const plant = await fetch("/api/houseplant/id").then(res => res.json())
    
    plantInfo(plant)
    moistureReasoning(lux["lux"], plant["Watering"])
    luxReasoning(moisture["moisture"], plant["Light ideal"])
  }

  endpoints()