import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Melbourne" />
      </div>
      <footer>
        This project was coded by Zena Issa and is
        <a href="https://github.com/boofx/react-weather-app">
          {" "}
          open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}
