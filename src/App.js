import React, { useState } from "react";
import { weatherStatus } from "./weather.js";
import "./index.css";
import Footer from "./components/footer/Footer.js";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch (`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  function titleCase(str) {
    let splitStr = str.toLowerCase().split(" ");

    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }

  return (
    <div className={
      (typeof weather.main != "undefined")  
      ? ((weatherStatus[titleCase(weather.weather[0].description)]) ? (weatherStatus[titleCase(weather.weather[0].description)].background) : "app") : "app"
      }>
      <main>
        <div className="container">
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Search for a city"
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyDown={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="results-box">
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
              </div>
              <div className="weather-box">
                <div className="weather-icon">
                  <img src={weatherStatus[titleCase(weather.weather[0].description)].icon} alt="Weather Icon"/>
                </div>
                <div className="weather">
                  {titleCase(weather.weather[0].description)}
                </div>
                <div className="current-temp">
                  Currently: {Math.round((weather.main.temp) *  9/5) + 32}° F
                </div>
                <div className="high-low-temp">
                  Low: {Math.round((weather.main.temp_min) *  9/5) + 32}°F / High: {Math.round((weather.main.temp_max) *  9/5) + 32}°F
                </div>
              </div> 
            </div>
          </div>
          ) : ("")}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;