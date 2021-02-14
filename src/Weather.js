import React from "react";
import axios from "axios";
import "./styles.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="main-city">Melbourne</h1>
        </div>
        <div className="col-4" id="current-data">
          <p id="day-time"> Wednesday 20 Jan, 20:43</p>
          <p id="description">Clear Sky</p>
        </div>
      </div>
      <form id="your-city">
        <input type="city" id="city-name" placeholder="Enter your city" />
        <button type="submit" value="search" id="look-up">
          Search
        </button>
        <button id="current-location">Current Location</button>
      </form>
      <div className="row">
        <div className="col-4">
          <h2>
            <span id="current-temp">12</span>
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
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
          <p className="min-max">
            <span id="min">Min: 11°C</span>| <span id="max"> Max: 14°C</span>
          </p>
        </div>
        <div className="col-4" id="con">
          <span>
            <li>
              Humidity <span id="humidity"> 93%</span>
            </li>
            <li>
              Wind <span id="wind"> 2 km/h</span>
            </li>
          </span>
        </div>
      </div>
      <div className="row">
        <div class="col">
          <strong>23:00</strong>
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
          <h3> 14° 12°</h3>
        </div>
        <div class="col">
          <strong>02:00</strong>
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
          <h3> 17° 16°</h3>
        </div>
        <div class="col">
          <strong>05:00</strong>
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
          <h3> 20° 19°</h3>
        </div>
        <div class="col">
          <strong>08:00</strong>
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
          <h3> 19° 19°</h3>
        </div>
        <div class="col">
          <strong>11:00</strong>
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
          <h3> 17° 17°</h3>
        </div>
        <div class="col">
          <strong>14:00</strong>
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
          <h3> 16° 16°</h3>
        </div>
      </div>
    </div>
  );
}
