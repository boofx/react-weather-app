import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [result, setResult] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setReturn(true);
  }

  <div className="row">
    <div className="col">
      <strong>23:00</strong>
      <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
      <h3> 14° 12°</h3>
    </div>
    <div className="col">
      <strong>02:00</strong>
      <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
      <h3> 17° 16°</h3>
    </div>
    <div className="col">
      <strong>05:00</strong>
      <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
      <h3> 20° 19°</h3>
    </div>
    <div className="col">
      <strong>08:00</strong>
      <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
      <h3> 19° 19°</h3>
    </div>
    <div className="col">
      <strong>11:00</strong>
      <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
      <h3> 17° 17°</h3>
    </div>
    <div className="col">
      <strong>14:00</strong>
      <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
      <h3> 16° 16°</h3>
    </div>
  </div>;
}
