// TODO replace placeholder data

let data_points = [50, 45, 46, 43, 40, 41];
let data_points2 = [0, 25, 17, 13, 10, 8];
let timing = [0, 2, 4, 6, 8, 10];

let lightChartElement = document.getElementById("light-chart");
let moistureChartElement = document.getElementById("moisture-chart");

new Chart(lightChartElement.getContext("2d"), {
  type: "line",
  data: {
    labels: timing.map((day) =>
      new Date(Date.UTC(2022, 12, day, 3, 23, 0, 0)).toLocaleDateString()
    ),
    datasets: [
      {
        label: "",
        data: data_points,
        backgroundColor: "rgba(0, 150, 242, 0.1)",
        borderColor: "#0d6efd",
        BorderRadius: 10,
        pointStyle: "circle",
        pointRadius: 3,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        align: "end",
      },
    },
  },
});

new Chart(moistureChartElement.getContext("2d"), {
  type: "line",
  data: {
    labels: timing.map((day) =>
      new Date(Date.UTC(2022, 12, day, 3, 23, 0, 0)).toLocaleDateString()
    ),
    datasets: [
      {
        label: "",
        data: data_points2,
        backgroundColor: "rgba(0, 150, 242, 0.1)",
        borderColor: "#0d6efd",
        BorderRadius: 10,
        fill: {
          target: "origin",
          above: "rgba(0, 150, 242, 0.2)",
        },
        pointStyle: "circle",
        pointRadius: 3,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        align: "end",
      },
    },
  },
});

let radioLables = document.getElementsByClassName("chart-toggle-lable");
radioLables[0].addEventListener("click", (e) => {
  lightChartElement.style.display = "block";
  moistureChartElement.style.display = "none";
});

radioLables[1].addEventListener("click", (e) => {
  moistureChartElement.style.display = "block";
  lightChartElement.style.display = "none";
});
