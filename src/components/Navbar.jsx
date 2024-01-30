import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [allGeoData, setAllGeoData] = useState({});
  const geoURI = `https://api.openweathermap.org/data/2.5/weather`;
  const limit = 5;

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchWeatherData = async () => {
    const response = await fetch(
      `${geoURI}?q=${city}&appid=${import.meta.env.VITE_APP_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setAllGeoData(data);
  };

  const handleKeyDown = async (e) => {
    // check the code of the key pressd is enter or not
    if (e.code === "Enter") {
      setCity(searchQuery);
      // fetchWeatherData();
    }
  };

  // useEffect(() => {
  //   fetchWeatherData();
  // }, []);

  return (
    <header>
      <div className="container">
        <div className="left logo">
          <h1 className="logo-text">WeatherX</h1>
        </div>
        <div className="center search-bar">
          <input
            type="text"
            placeholder="Enter city name"
            name="searchQuery"
            onChange={handleChange}
            value={searchQuery}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
        </div>
        <div className="right">
          <div className="temp-unit-select">
            <select name="temp-unit" id="tempUnit">
              <option value="temp-cel">&deg;C</option>
              <option value="temp-feh">&deg;F</option>
              <option value="temp-kel">K</option>
            </select>
          </div>
          <div className="current-city">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p>{city}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
