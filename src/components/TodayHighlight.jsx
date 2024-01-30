import React from "react";
import HighlightCard from "./HighlightCard";
import "../styles/Highlight.css";

const TodayHighlight = (props) => {
  const { weatherData } = props;
  const iconBaseURI = `http://openweathermap.org/img/wn/`;
  return (
    <div className="today-container">
      <div className="today card">
        <div className="curr-weather-icon">
          <img src={`${iconBaseURI}`} alt="" width="100" height="100" />
        </div>
        <div className="weather-details">
          <h2 className="cur-temp">
            34<span className="temp-unit">&deg;C</span>
          </h2>
          <p className="cur-weather">Clear Sky</p>
        </div>
      </div>

      <div className="highlights card">
        <h2 className="highlight-heading">Today&apos;s Highlights</h2>
        <div className="highlights-container">
          <HighlightCard title="Feels Like" value={37} unit={`&deg;C`} />
          <HighlightCard title="Humidity" value={80} unit={"%"} />
          <HighlightCard title="Visibility" value={10} unit={"km"} />
          <HighlightCard
            title="Max & Min Temp"
            value={"30 - 40"}
            unit={`&deg;C`}
          />
          <HighlightCard
            title="Sunrise & Sunset"
            value={"5:30"}
            param={"6:30"}
          />
          <HighlightCard
            title="Wind Speed"
            value={14}
            unit={"km"}
            param={"North"}
          />
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;
