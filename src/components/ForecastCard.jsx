import React from "react";
import { CalendarDays } from "lucide-react";

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

  const unitSymbol =
    tempUnit === "metric"
      ? `${String.fromCharCode(176)}C`
      : tempUnit === "imperial"
      ? `${String.fromCharCode(176)}F`
      : "K";

  return (
    <div
      className="flex flex-col items-center justify-between min-w-max  text-center p-3 rounded-xl card m-2"
      key={key}
    >
      <div className="flex gap-1 date">
        <CalendarDays strokeWidth="1" />
        {date}
      </div>
      <div className="temp-icon">
        <img src={imgURI} alt={weatherDesc} width="150" height="150" />
      </div>
      <div className="temp-desc mb-5">
        <p className="text-lg font-medium">{weatherDesc}</p>
      </div>
      <div className="temp mb-2">
        <p className="font-medium text-base">
          <span>Avg Temp: </span>
          {temp.toFixed()}
          {unitSymbol}
        </p>
      </div>
      <div className="temp-diff">
        <p className="min-temp mb-1 font-medium text-base">
          <span>Min Temp: </span>
          {minTemp.toFixed()}
          {unitSymbol}
        </p>
        <p className="max-temp font-medium text-base">
          <span>Max Temp: </span>
          {maxTemp.toFixed()}
          {unitSymbol}
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;
