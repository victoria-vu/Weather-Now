import React from 'react';
import './index.css';

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date}, ${year}`
  }


  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search for a city"
          />
        </div>
        <div className="location-box">
          <div className="location">Amsterdam</div>
          {/* <div className="date">{dateBuilder(new Date())}</div> */}
        </div>
        <div className="weather-box">
          <div className="temp">
            60°F
          </div>
          <div className="weather">
            Partly Cloudy
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
