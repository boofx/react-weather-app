import React from "react";
import WeatherIcon from "react-icons-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_SKY",
    "01n": "CLEAR_SKY",
    "02d": "FEW_CLOUDS",
    "02n": "FEW_CLOUDS",
    "03d": "SCATTERED_CLOUDS",
    "03n": "SCATTERED_CLOUDS",
    "04d": "BROKEN_CLOUDS",
    "04n": "BROKEN_CLOUDS",
    "09d": "SHOWER_RAIN",
    "09n": "SHOWER_RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "THUNDERSTORM",
    "11n": "THUNDERSTORM",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "MIST",
    "50n": "MIST",
  };
  return <WeatherIcon icon={codeMapping[props.code]} />;
}
