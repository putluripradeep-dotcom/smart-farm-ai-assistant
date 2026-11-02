const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/current/:city", async (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    return res.json({
      city,
      temperature: 28,
      humidity: 66,
      feelsLike: 30,
      description: "Partly sunny",
      windSpeed: 12,
      mock: true
    });
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch weather data." });
  }
});

module.exports = router;
