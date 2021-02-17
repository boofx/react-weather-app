import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="git-link">
      <span>
        This project was coded by Zena Issa and is
        <a href="https://github.com/boofx/react-weather-app">
          {" "}
          open-sourced on Github{" "}
        </a>
      </span>
    </div>
  );
}
