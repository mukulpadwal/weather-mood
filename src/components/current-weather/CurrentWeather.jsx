import cbw from "clothes-by-weather";
import "./CurrentWeather.css";

const CurrentWeather = ({ weatherData }) => {

    // console.log(weatherData);
    const output = cbw({
        temperature: weatherData.main.temp - 273.15,
        pop: weatherData.main.humidity/100,
        description: weatherData.weather[0].description,
        windGust: weatherData.wind.speed,
    });

    // console.log(output);

    return (
        <div>
            <div className="weather-box">
                <div className="top">
                    <div>
                        <p className="city">{weatherData.city}</p>
                        <p className="weather-description">{weatherData.weather[0].description}</p>
                    </div>
                    <img className="weather-icon" alt="weather" src={`icons/${weatherData.weather[0].icon}.png`} />
                </div>
                <div className="bottom">
                    <p className="temperature">{Math.round(weatherData.main.temp - 273.15)}°C</p>
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label">Details</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Feels Like</span>
                            <span className="parameter-value">{Math.round(weatherData.main.feels_like - 273.15)}°C</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Humidity</span>
                            <span className="parameter-value">{weatherData.main.humidity}%</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Wind Speed</span>
                            <span className="parameter-value">{weatherData.wind.speed}m/s</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Pressure</span>
                            <span className="parameter-value">{weatherData.main.pressure}hPa</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="outfit-box">

            </div>
        </div>
    )
}

export default CurrentWeather;