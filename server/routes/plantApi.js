const express = require("express")
const axios = require("axios");

var router = express.Router();

router.get("/", (req, res) => {
  res.render("dashboard")
});

const getAll = {
  method: 'GET',
  url: 'https://house-plants2.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'eaad4f9599msh16f78748677bb50p10c094jsnc3e585773cf3',
    'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
  }
};

axios.request(getAll).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

module.exports = router;