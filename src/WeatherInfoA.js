import React from "react";
import FormatDate from "./FormatDate";
import "./WeatherInfoA.css";

export default function WeatherInfoA(props) {
  return (
    <div className="row">
      <div className="col-4">
        <h1 className="main-city">{props.data.city}</h1>
      </div>
      <div className="col-4" id="current-data">
        <p id="day-time">
          <FormatDate date={props.data.date} />
        </p>
        <p className="text-capitalize">{props.data.description}</p>
      </div>
    </div>
  );
}
