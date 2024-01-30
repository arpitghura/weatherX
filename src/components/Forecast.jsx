import React, { useEffect, useState } from "react";

const Forecast = ({ tempUnit, city }) => {
  const [forecastData, setForecastData] = useState(undefined);
  const forecastURI = `https://api.openweathermap.org/data/2.5/forecast`;

  const fetchForecastData = async () => {
    const response = await fetch(
      `${forecastURI}?q=${city}&units=${tempUnit}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );
    console.log(response);
    const data = await response.json();
    console.log({ data });
    setForecastData(data);
  };

  useEffect(() => {
    fetchForecastData();
  }, [city, tempUnit]);

  return (
    <div className="forecast-container">
      <h1>5 days forecast</h1>
    </div>
  );
};

export default Forecast;
