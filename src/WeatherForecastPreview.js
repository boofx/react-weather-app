import React from "react";

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
      <img
        src="http://openweathermap.org/img/wn${response.data.weather[0].icon}@2x,png"
        alt=""
      />
      <h3> {temperature()}</h3>
    </div>
  );
}
