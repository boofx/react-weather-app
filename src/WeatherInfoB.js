import React from "react";
import WeatherUnit from "./WeatherUnit";
import "./WeatherInfoB.css";

export default function WeatherInfoB(props) {
  return (
    <div className="row">
      <div className="col-4">
        <WeatherUnit celsius={props.data.temperature} />
      </div>
      <div className="col-4">
        <img src={props.data.icon} alt={props.data.description} />
        <p className="min-max">
          <span id="min">Min: {props.data.min}°C</span>|{" "}
          <span id="max"> Max: {props.data.max}°C</span>
        </p>
      </div>
      <div className="col-4" id="con">
        <span>
          <li>
            Humidity <span id="humidity"> {props.data.humidity} %</span>
          </li>
          <li>
            Wind <span id="wind"> {props.data.wind} km/h</span>
          </li>
        </span>
      </div>
    </div>
  );
}
