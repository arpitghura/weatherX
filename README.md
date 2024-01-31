# WeatherX

WeatherX is a weather application where you can look for weather data by city name. The App is backed by `OpenWeatherMaps` API.

To view the live version of the App, Visit [weather-x-arpit.vercel.app](https://weather-x-arpit.vercel.app)

## Features

1. Get Weather Data using City Name (supports globally).
2. View Temperature in different units (&deg;Celcius, &deg;Fahrenheit, and Kelvin).
3. View 5 days Forecast with (Average, maximum and minimum temperature and the weather description).
   Along with the weather, you can view other highlights that include Humidity, Sunrise and Sunset time, Wind Speed and Direction, Feel temperature, visibility and more.

## Installation

This project is using [OpenWeatherMap](https://openweathermap.org/) API for fetching data. Steps to get the API key are described [here](#steps-to-get-openweathermap-api-key).

1. Fork the Repository.
2. Clone the repository into your local system using the following command:

   ```bash
       git clone https://github.com/<your-username>/weatherX.git
   ```

   > Replace <your-username> with your github username in which you have forked the repo.

3. Move to the project directory using `cd weatherX`.

4. Copy the `.env.example` file and rename it to `.env.local`.
5. Paste your `OpenWeatherMap` API key in place of `YOUR_API_KEY`. Steps to get an API key are described [here](#steps-to-get-openweathermap-api-key).
   ```
   VITE_APP_API_KEY=YOUR_API_KEY
   ```
6. Install required dependencies using the following command:

   ```bash
   npm install
   ```

7. Now, you are ready to go. To run the development server, use the following command:

   ```bash
   npm run dev
   ```

## Steps to get OpenWeatherMap API Key

1. Navigate to [OpenWeatherMap](https://openweathermap.org/) and sign up with an account.

2. Verify the account and go to the account dashboard to get a FREE API.

3. Copy the API key and use it in the App.

> We are using [Current Weather Data Collection](https://openweathermap.org/current) for fetching current weather data and [5 Day / 3 Hour Forecast Collection](https://openweathermap.org/forecast5) for fetching 5 days forecast data.

## Sample Data

The App contains two files in the main directory namely `sample_city_data.json` and `sample_forecast_data.json`. These two files contain the response received from the API call.

1. The `sample_city_data.json` file contains the data fetched for a city for the current time using Current Weather Data Collection.

2. The `sample_forecast_data.json` file contains the data fetched for a city for the next 5 days with a 3-hour forecast for each day.

## Tech Stack

- HTML
- CSS
- Tailwind CSS
- Javascript
- React.js

---

> Made with &hearts; by Arpit Ghura. If you enjoyed this project, Give this project a Star. Thank you.
