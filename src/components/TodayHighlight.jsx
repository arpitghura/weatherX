import React, { useEffect } from "react";
import HighlightCard from "./HighlightCard";
import { CalendarDays, MapPin } from "lucide-react";

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
    <div className="today-container flex flex-row items-center justify-between h-full transition-all duration-[ease] delay-[0.4s] text-[whitesmoke] p-[15px]">
      <div className="text-base w-2/5 h-full px-[15px] py-5 card">
        <div className="flex flex-row space-around w-max gap-4 text-whitesmoke">
          <div className="flex flex-row gap-1 city">
            <MapPin />
            <p>{weatherData?.name}</p>
          </div>
          <div className="flex flex-row gap-1 date">
            <CalendarDays />
            <p>{new Date().toDateString()}</p>
          </div>
        </div>
        <div className="curr-weather-icon">
          <img
            src={imgURI}
            alt={weatherData?.weather[0]?.description}
            width="120"
            height="120"
          />
        </div>
        <div className="weather-details">
          <h2 className="cur-temp text-5xl font-bold">
            {weatherData?.main?.temp.toFixed()}
            <span className="text-5xl font-normal">{unitSymbol}</span>
          </h2>
          <p className="cur-weather py-2">
            {weatherData?.weather[0]?.description}
          </p>
        </div>
      </div>

      <div className="highlights w-6/12 px-[15px] py-5 card">
        <h2 className="highlight-heading text-[large] font-medium pt-0 pb-2.5 px-0">
          Today&apos;s Highlights
        </h2>
        <div className="highlights-container flex flex-row justify-between items-center w-full h-full flex-wrap">
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
            value={(weatherData?.wind?.speed * 3.6).toFixed()}
            unit={"kmph"}
            param={getWindDirection(weatherData?.wind?.deg)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;
