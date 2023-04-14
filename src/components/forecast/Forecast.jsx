import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./Forecast.css";

const Forecast = ({ forecastData }) => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const newWeekday = weekday.slice((new Date()).getDay() + 1, weekday.length).concat(weekday.slice(0, (new Date()).getDay() + 1))

    return (
    <>
        <div className="title">Next 7 Days Forecast</div>
        <Accordion allowZeroExpanded>
            {forecastData.list.splice(0,7).map((forecast, idx) => {
                {/* console.log(forecast); */}
                return (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="main-item-div">
                                    <img className="weather-icon-small" alt="weather-icon" src={`icons/${forecast.weather[0].icon}.png`}/>
                                    <label className="day">{newWeekday[idx]}</label>
                                    <label className="desc">{forecast.weather[0].description}</label>
                                    <label className="temp">{Math.round(forecast.main.temp_max - 273.15)}°C / {Math.round(forecast.main.temp_min - 273.15)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="item-panel-grid">
                                <div className="grid-item">
                                    <label>Pressure</label>
                                    <label>{forecast.main.pressure}hPa</label>
                                </div>
                                <div className="grid-item">
                                    <label>Humidity</label>
                                    <label>{forecast.main.humidity}%</label>
                                </div>
                                <div className="grid-item">
                                    <label>Clouds</label>
                                    <label>{forecast.clouds.all}</label>
                                </div>
                                <div className="grid-item">
                                    <label>Wind Speed</label>
                                    <label>{forecast.wind.speed}m/s</label>
                                </div>
                                <div className="grid-item">
                                    <label>Sea Level</label>
                                    <label>{forecast.main.sea_level}m</label>
                                </div>
                                <div className="grid-item">
                                    <label>Feels Like</label>
                                    <label>{Math.round(forecast.main.feels_like - 273.15)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                )
            })}
        </Accordion>
    </>)
};

export default Forecast;