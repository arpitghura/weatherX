import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ handleChangeCity, weatherData, handleChangeTempUnit }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleChangeUnit = (e) => {
    const unit = e.target.value;
    if (unit === "temp-cel") {
      handleChangeTempUnit("metric");
    } else if (unit === "temp-feh") {
      handleChangeTempUnit("imperial");
    } else {
      handleChangeTempUnit("default");
    }
    console.log(unit);
  };

  const handleKeyDown = async (e) => {
    // check the code of the key pressd is enter or not
    if (e.code === "Enter") {
      handleChangeCity(searchQuery);
    }
  };

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
            <select name="temp-unit" id="tempUnit" onChange={handleChangeUnit}>
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
              stroke="#2b2b2b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p>{weatherData?.name}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
