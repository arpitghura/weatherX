import React from "react";

const ForecastCard = ({
  key,
  weatherIcon,
  weatherDesc,
  minTemp,
  maxTemp,
  temp,
  date,
  tempUnit,
}) => {
  const iconBaseURI = `https://openweathermap.org/img/wn/`;
  const imgURI = `${iconBaseURI}${weatherIcon}@4x.png`;
  console.log(imgURI);

  const unitSymbol =
    tempUnit === "metric"
      ? `${String.fromCharCode(176)}C`
      : tempUnit === "imperial"
      ? `${String.fromCharCode(176)}F`
      : "K";

  return (
    <div className="wrapper flex flex-row items-center justify-center">
      <div className="forecast-card" key={key}>
        <div className="date">{date}</div>
        <div className="temp-icon">
          <img src={imgURI} alt={weatherDesc} width="200" height="200" />
        </div>
        <div className="temp">
          <p className="font-medium text-lg">
            <span>Avg Temp: </span>
            {temp.toFixed()}
            {unitSymbol}
          </p>
        </div>
        <div className="temp-diff">
          <p className="min-temp">
            <span>Min Temp: </span>
            {minTemp.toFixed()}
            {unitSymbol}
          </p>
          <p className="max-temp">
            <span>Max Temp: </span>
            {maxTemp.toFixed()}
            {unitSymbol}
          </p>
        </div>
        <div className="temp-desc">
          <p>{weatherDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
