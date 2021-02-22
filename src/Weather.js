import React, { useState } from "react";
import WeatherInfoA from "./WeatherInfoA";
import WeatherInfoB from "./WeatherInfoB";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "bc0b0c73f0c3380ab48613cc0c13531d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <WeatherInfoA data={weather} />
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter your city"
            autoFocus="on"
            onChange={updateCity}
          />
          <button type="submit" value="search" id="look-up">
            Search
          </button>
          <button id="current-location">Current Location</button>
        </form>
        <WeatherInfoB data={weather} />
        <Forecast city={weather.city} />
      </div>
    );
  } else {
    search();
    return "Loading page...";
  }
}
