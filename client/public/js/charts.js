// set up eventlisteners
let radioLables = document.getElementsByClassName("chart-toggle-lable");
radioLables[0].addEventListener("click", (e) => {
    lightChartElement.style.display = "block";
    moistureChartElement.style.display = "none";
});
radioLables[1].addEventListener("click", (e) => {
    moistureChartElement.style.display = "block";
    lightChartElement.style.display = "none";
});

// create charts
let lightChartElement = document.getElementById("light-chart");
let moistureChartElement = document.getElementById("moisture-chart");

async function setLuxChart(data) {
    const lux = data.map(({lux}) => lux)
    const dates = data.map(({Date}) => Date)
    console.log("lux", lux)
    new Chart(lightChartElement.getContext("2d"), {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: "",
                data: lux,
                backgroundColor: "rgba(0, 150, 242, 0.1)",
                borderColor: "#0d6efd",
                BorderRadius: 10,
                pointStyle: "circle",
                pointRadius: 3,
            },],
        },
        options: {
            plugins: {
                legend: {
                    align: "end",
                },
            },
        },
    });
}

document.getElementById("charts-spinner").remove()

async function setMoistureChart(data) {
    const moisture = data.map(({moisture}) => moisture)
    const dates = data.map(({Date}) => Date)
    new Chart(moistureChartElement.getContext("2d"), {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: "",
                data: moisture,
                backgroundColor: "rgba(0, 150, 242, 0.1)",
                borderColor: "#0d6efd",
                BorderRadius: 10,
                fill: {
                    target: "origin",
                    above: "rgba(0, 150, 242, 0.2)",
                },
                pointStyle: "circle",
                pointRadius: 3,
            },],
        },
        options: {
            plugins: {
                legend: {
                    align: "end",
                },
            },
        },
    });
}