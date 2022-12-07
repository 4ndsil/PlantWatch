const axios = require("axios");

const BASE_URL = "https://house-plants2.p.rapidapi.com/";
const HEADERS = {
  "X-RapidAPI-Key": process.env.PLANT_API_KEY,
  "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
};

const getAllPlants = async () => {
  return await axios
    .get(BASE_URL, { headers: HEADERS })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(`Failed to fetch data from API:  ${error.message}`);
    });
};

// get plant by id
const getPlantById = async (id) => {
  return await axios
    .get(`${BASE_URL}${id}`, { headers: HEADERS })
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        throw new Error(`Could not find plant with id ${id}`);
      }
    })
    .catch((error) => {
      throw new Error(`Failed to fetch data from API:  ${error.message}`);
    });
};

module.exports = {
  getAllPlants,
  getPlantById,
};
