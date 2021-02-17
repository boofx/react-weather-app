import React, { useState } from "react";
import FormatDate from "./FormatDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultcity);
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "bc0b0c73f0c3380ab48613cc0c13531d";
    let city = "Melbourne";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}
      `;
    axios.get(apiUrl).then(handleResponse);
  }

  if (setWeather.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1 className="main-city">{weather.city}</h1>
          </div>
          <div className="col-4" id="current-data">
            <p id="day-time"> {weather.date}</p>
            <p className="text-capitalize">{weather.description}</p>
          </div>
        </div>
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
        <div className="row">
          <div className="col-4">
            <h2>
              <span className="temperature">{weather.temperature}</span>
              <span id="units">
                <a href="#" id="celsius" className="active">
                  °C |
                </a>
                <a href="#" id="fahrenheit">
                  °F
                </a>
              </span>
            </h2>
          </div>
          <div className="col-4">
            <img src={weather.icon} alt={weather.description} />
            <p className="min-max">
              <span id="min">Min: {weather.min}°C</span>|{" "}
              <span id="max"> Max: {weather.max}°C</span>
            </p>
          </div>
          <div className="col-4" id="con">
            <span>
              <li>
                Humidity <span id="humidity"> {weather.humidity} %</span>
              </li>
              <li>
                Wind <span id="wind"> {weather.wind} km/h</span>
              </li>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
