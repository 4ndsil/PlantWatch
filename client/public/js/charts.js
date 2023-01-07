// canvas elements
let lightChartElement = document.getElementById("light-chart");
let moistureChartElement = document.getElementById("moisture-chart");

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

const createChart = (data, datetimes, canvas, options) => {
  const { yTitle, fill } = options ? options : { ...undefined };
  new Chart(canvas.getContext("2d"), {
    type: "line",
    data: {
      labels: datetimes,
      datasets: [
        {
          label: "",
          data: data,
          backgroundColor: "rgba(0, 150, 242, 0.1)",
          borderColor: "#0d6efd",
          pointStyle: "circle",
          pointRadius: 0,
          ...(fill
            ? {
                fill: {
                  target: "origin",
                  above: "rgba(0, 150, 242, 0.2)",
                },
              }
            : null),
        },
      ],
    },
    options: {
      scales: {
        y: {
          ...(yTitle
            ? {
                title: {
                  display: true,
                  text: yTitle,
                },
              }
            : null),
          position: "left",
        },
        x: {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10.1,
            callback: function (value, index, ticks) {
              return new Date(datetimes[index]).toLocaleDateString();
            },
          },
          position: "bottom",
        },
      },
      plugins: {
        legend: {
          align: "end",
        },
        tooltip: {
          intersect: false,
          yAlign: "bottom",
          mode: "index",
          position: "nearest",
          callbacks: {
            title: (tooltipItems) =>
              new Date(tooltipItems[0].label).toLocaleString(),
          },
        },
      },
    },
  });
};

async function setLuxChart(data) {
  const lux = data.map(({ lux }) => lux);
  const dates = data.map(({ date }) => date);
  createChart(lux, dates, lightChartElement, { yTitle: "Light ( lux )" });
  if ((spinner = document.getElementById("charts-spinner"))) spinner.remove();
}

async function setMoistureChart(data) {
  const moisture = data.map(({ moisture }) => moisture);
  const dates = data.map(({ date }) => date);
  createChart(moisture, dates, moistureChartElement, {
    yTitle: "Soil capacitance ( farad )",
    fill: true,
  });
  if ((spinner = document.getElementById("charts-spinner"))) spinner.remove();
}
