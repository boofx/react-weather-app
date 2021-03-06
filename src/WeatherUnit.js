import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <h2>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span id="units">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F{" "}
          </a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span id="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </h2>
    );
  }
}
