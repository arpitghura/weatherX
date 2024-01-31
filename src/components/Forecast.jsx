import React, { useEffect, useState } from "react";
import ForecastCard from "./ForecastCard";

const Forecast = ({ tempUnit, city }) => {
  const [forecastData, setForecastData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const forecastURI = `https://api.openweathermap.org/data/2.5/forecast`;

  const fetchForecastData = async () => {
    const response = await fetch(
      `${forecastURI}?q=${city}&units=${tempUnit}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );
    const data = await response.json();
    if (data.cod === "200") {
      setForecastData(data.list);
      console.log("data:", data.list);
    } else {
      setError(data.message);
    }
  };

  useEffect(() => {
    fetchForecastData();
  }, [city, tempUnit]);

  return (
    <div className="forecast-container mt-14">
      <h1 className="heading">5 days forecast</h1>
      <div className="flex forecasts-main-container">
        {forecastData ? (
          forecastData.map((forecast) => {
            if (forecast.dt_txt.includes("12:00:00")) {
              return (
                <ForecastCard
                  key={forecast.dt}
                  weatherIcon={forecast.weather[0].icon}
                  weatherDesc={forecast.weather[0].description}
                  minTemp={forecast.main.temp_min}
                  maxTemp={forecast.main.temp_max}
                  temp={forecast.main.temp}
                  date={forecast.dt_txt.split(" ")[0]}
                  tempUnit={tempUnit}
                />
              );
            }
          })
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
};

export default Forecast;
