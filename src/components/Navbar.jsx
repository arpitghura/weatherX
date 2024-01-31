import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ handleChangeCity, handleChangeTempUnit }) => {
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
          <button className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>
        <div className="right">
          <div className="temp-unit-select">
            <select name="temp-unit" id="tempUnit" onChange={handleChangeUnit}>
              <option value="temp-cel">&deg;Celcius</option>
              <option value="temp-feh">&deg;Fahrenheit</option>
              <option value="temp-kel">Kelvin</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
