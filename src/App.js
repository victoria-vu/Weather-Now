import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search for a city">
          </input>
        </div>
      </main>
    </div>
  );
}

export default App;
