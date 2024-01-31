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
    <div className="wrapper flex flex-row items-center justify-center ">
      <div
        className="forecast-card w-[min(200px,18vw)] text-center m-2.5 px-[15px] py-2.5 rounded-[20px]"
        key={key}
      >
        <div className="date">{date}</div>
        <div className="temp-icon">
          <img src={imgURI} alt={weatherDesc} width="200" height="200" />
        </div>
        <div className="temp-desc mb-6">
          <p>{weatherDesc}</p>
        </div>
        <div className="temp mb-2">
          <p className="font-medium text-base">
            <span>Avg Temp: </span>
            {temp.toFixed()}
            {unitSymbol}
          </p>
        </div>
        <div className="temp-diff">
          <p className="min-temp mb-1">
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
      </div>
    </div>
  );
};

export default ForecastCard;
