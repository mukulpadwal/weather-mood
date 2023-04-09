import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./Forecast.css";

const Forecast = ({ forecastData }) => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    return (
    <>
        <label className="title">Next 7 Days Forecast</label>
        <Accordion allowZeroExpanded>
            {forecastData.list.splice(0,7).map((forecast, idx) => {
                console.log(forecast);
                return (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="main-item-div">
                                    <div className="left-item">
                                        <img className="left-item-icon" alt="weather-icon" src={`icons/${forecast.weather[0].icon}.png`}/>
                                        <p>{weekday[(new Date()).getDay()]}</p>
                                    </div>
                                    <div className="right-item">
                                        <p>{forecast.weather[0].description}</p>
                                        <p>{Math.round(forecast.main.temp - 273.15)}°C</p>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                icon
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                )
            })}
        </Accordion>
    </>)
};

export default Forecast;