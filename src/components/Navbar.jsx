import React, { useState } from "react";
import { Search } from "lucide-react";
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
    if (e.code === "Enter" && searchQuery === "") return;
    if (e.code === "Enter") {
      handleChangeCity(searchQuery);
      setSearchQuery("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === "") return;
    handleChangeCity(searchQuery);
    setSearchQuery("");
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
          <button className="search-icon" onClick={handleSubmit}>
            <Search />
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
