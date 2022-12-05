const express = require("express");
const axios = require("axios");

var router = express.Router();

router.get("/", (req, res) => {
  res.render("dashboard");
  console.log();
});

const getAll = {
  method: "GET",
  url: "https://house-plants2.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": process.env.PLANT_API_KEY,
    "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
  },
};

axios
  .request(getAll)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

module.exports = router;
