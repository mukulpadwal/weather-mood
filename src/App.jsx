import Search from './components/search/Search';
import Forcast from './components/forcast/Forcast';
import './App.css';
import {useState } from 'react';
import CurrentWeather from './components/current-weather/CurrentWeather';
import { OPEN_WEATHER_BASE_URL } from "./api/openWeatherApi.js";

const App = () => {

  const [weatherData, setWeatherData] = useState(null);

  function handleOnSearchChange(searchData){
    const [lat, lon] = searchData.value.split(" ");
    fetch(`${OPEN_WEATHER_BASE_URL}&lat=${lat}&lon=${lon}`)
        .then((response) => response.json())
        .then((response) => setWeatherData(response))
        .catch((error) => console.log(error));
  }

  return (
    <div className='container'>  
      <Search onSearchChange={handleOnSearchChange} />
      {weatherData && <CurrentWeather weatherData={weatherData} />}
      <Forcast />
    </div>
  );
}

export default App;
