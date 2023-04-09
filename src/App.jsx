import Search from './components/search/Search';
import Forecast from './components/forecast/Forecast';
import './App.css';
import {useState } from 'react';
import CurrentWeather from './components/current-weather/CurrentWeather';
import { OPEN_WEATHER_BASE_URL, OPEN_WEATHER_FORECAST_URL } from "./api/openWeatherApi.js";

const App = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  function handleOnSearchChange(searchData){
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${OPEN_WEATHER_BASE_URL}&lat=${lat}&lon=${lon}`);
    const forecastFetch = fetch(`${OPEN_WEATHER_FORECAST_URL}&lat=${lat}&lon=${lon}`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setWeatherData({city: searchData.label, ...weatherResponse});
        setForecastData({city: searchData.label, ...forecastResponse});
      })
      .catch((error) => console.log(error));

  }

  return (
    <div className='container'>  
      <Search onSearchChange={handleOnSearchChange} />
      {weatherData && <CurrentWeather weatherData={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} />}
    </div>
  );
}

export default App;
