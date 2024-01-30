import React, { useEffect } from "react";
import HighlightCard from "./HighlightCard";
import "../styles/Highlight.css";

const TodayHighlight = ({ weatherData, tempUnit }) => {
  const getWindDirection = (deg) => {
    if (deg > 337.5) return "N";
    else if (deg > 292.5) return "NW";
    else if (deg > 247.5) return "W";
    else if (deg > 202.5) return "SW";
    else if (deg > 157.5) return "S";
    else if (deg > 122.5) return "SE";
    else if (deg > 67.5) return "E";
    else if (deg > 22.5) {
      return "NE";
    } else {
      return "N";
    }
  };

  const unitSymbol =
    tempUnit === "metric"
      ? `${String.fromCharCode(176)}C`
      : tempUnit === "imperial"
      ? `${String.fromCharCode(176)}F`
      : "K";

  const iconBaseURI = `https://openweathermap.org/img/wn/`;
  const imgURI = `${iconBaseURI}${weatherData?.weather[0]?.icon}@4x.png`;
  console.log(imgURI);
  return (
    <div className="today-container">
      <div className="today card">
        <div className="curr-weather-icon">
          <img src={imgURI} alt="" width="120" height="120" />
        </div>
        <div className="weather-details">
          <h2 className="cur-temp">
            {weatherData?.main?.temp.toFixed()}
            <span className="temp-unit">{unitSymbol}</span>
          </h2>
          <p className="cur-weather">{weatherData?.weather[0]?.description}</p>
        </div>
      </div>

      <div className="highlights card">
        <h2 className="highlight-heading">Today&apos;s Highlights</h2>
        <div className="highlights-container">
          <HighlightCard
            title="Feels Like"
            value={weatherData?.main?.feels_like.toFixed()}
            unit={unitSymbol}
          />
          <HighlightCard
            title="Humidity"
            value={weatherData?.main?.humidity}
            unit={"%"}
          />
          <HighlightCard
            title="Visibility"
            value={weatherData?.visibility / 1000}
            unit={"km"}
          />
          <HighlightCard
            title="Min & Max Temp"
            value={`${weatherData?.main?.temp_min.toFixed()}${unitSymbol} - ${weatherData?.main?.temp_max.toFixed()}`}
            unit={unitSymbol}
          />
          <HighlightCard
            title="Sunrise & Sunset"
            value={
              new Date(weatherData?.sys?.sunrise).getHours() +
              ":" +
              new Date(weatherData?.sys?.sunrise).getMinutes()
            }
            param={
              new Date(weatherData?.sys?.sunset).getHours() +
              ":" +
              new Date(weatherData?.sys?.sunset).getMinutes()
            }
          />
          <HighlightCard
            title="Wind Speed"
            value={weatherData?.wind?.speed.toFixed()}
            unit={"km"}
            param={getWindDirection(weatherData?.wind?.deg)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;
