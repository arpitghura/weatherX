import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodayHighlight from "./components/TodayHighlight";
import Forecast from "./components/Forecast";

function App() {
  const [city, setCity] = useState("Bhopal");
  const [weatherData, setWeatherData] = useState(undefined);
  const [tempUnit, setTempUnit] = useState("metric");
  const [error, setError] = useState(undefined);
  const geoURI = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeatherData = async () => {
    const response = await fetch(
      `${geoURI}?q=${city}&units=${tempUnit}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );
    const data = await response.json();
    if (data.cod === 200 && data.name === city) {
      setWeatherData(data);
    } else if (data.cod === 500) {
      setError("We ran into some error. Please try again in some time.");
    } else if (data.name !== city) {
      setError("City Name is incorrect. Please try again.");
    } else {
      setError(data.message);
    }
  };

  const handleChangeTempUnit = (unit) => {
    setTempUnit(unit);
    weatherData && fetchWeatherData();
  };

  const handleChangeCity = (cityName) => {
    setError(undefined);
    setCity(cityName);
    fetchWeatherData();
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city, tempUnit]);

  return (
    <div className="app">
      <Navbar
        handleChangeCity={handleChangeCity}
        handleChangeTempUnit={handleChangeTempUnit}
      />
      {weatherData && error === undefined && (
        <>
          <TodayHighlight weatherData={weatherData} tempUnit={tempUnit} />
          <Forecast tempUnit={tempUnit} city={city} />
        </>
      )}

      {error !== undefined && (
        <p className="text-center text-red-500 font-lg font-semibold">
          {error}
        </p>
      )}

      <footer>
        <p className="text-center bg-gray-800 p-4 text-white text-base font-medium">
          Made with &hearts; by{" "}
          <a href="https://github.com/arpitghura">Arpit Ghura</a>
        </p>
      </footer>
    </div>
  );
}
export default App;
