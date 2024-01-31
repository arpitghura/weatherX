import React, { useState } from "react";
import { Search } from "lucide-react";

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
      <div className="to-container flex justify-between w-full items-center p-2.5">
        <div className="left logo">
          <h1 className="logo-text text-[large] font-bold">WeatherX</h1>
        </div>
        <div className="center search-bar w-2/5 min-w-min relative">
          <input
            type="text"
            placeholder="Enter city name"
            name="searchQuery"
            onChange={handleChange}
            value={searchQuery}
            onKeyDown={handleKeyDown}
            className="search-input w-full h-full border bg-transparent text-[black] text-base font-normal px-2 py-[0.7rem] rounded-[50px] border-solid border-[rgba(0,0,0,0.125)] outline-none"
          />
          <button
            className="search-icon absolute translate-x-2/4 text-base text-[rgba(0,0,0,0.5)] cursor-pointer bg-[#17b586bb] select-none text-center p-2.5 rounded-[50px] border-[none] right-[23px] top-0 outline-none"
            onClick={handleSubmit}
          >
            <Search />
          </button>
        </div>
        <div className="right">
          <div className="temp-unit-select">
            <select
              name="temp-unit"
              id="tempUnit"
              onChange={handleChangeUnit}
              className="w-full h-full border bg-transparent text-[black] text-base font-normal cursor-pointer p-[0.3rem] rounded-[10px] border-solid border-[rgba(0,0,0,0.125)] outline-none"
            >
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
