import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="col">
      <strong>{hours()}</strong>
      <WeatherIcons code={props.data.weather[0].icon} />
      <h3> {temperature()}</h3>
    </div>
  );
}
