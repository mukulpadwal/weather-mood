import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Forecast = ({ forecastData }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const newWeekday = weekday
    .slice(new Date().getDay() + 1, weekday.length)
    .concat(weekday.slice(0, new Date().getDay() + 1));

  return (
    <div className="w-full">
      <div className="text-center font-bold text-3xl my-6">
        Next 7 Days Forecast
      </div>
      <Accordion allowZeroExpanded>
        {forecastData.list.splice(0, 7).map((forecast, idx) => {
          return (
            <AccordionItem
              key={idx}
              className="mx-2 my-6 rounded-lg p-2 border"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="flex justify-between items-center">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2 gap-y-2">
                    <img
                      alt="weather-icon"
                      src={`icons/${forecast.weather[0].icon}.png`}
                      height={40}
                      width={40}
                    />
                    <label className="text-sm sm:text-lg font-semibold">
                      {forecast.weather[0].description.toUpperCase()}
                    </label>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2 gap-y-2">
                    <label className="text-sm sm:text-lg font-semibold">
                      {newWeekday[idx]}
                    </label>
                    <label className="text-sm sm:text-lg font-semibold">
                      {Math.round(forecast.main.temp_max - 273.15)}°C /{" "}
                      {Math.round(forecast.main.temp_min - 273.15)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="rounded-lg my-4 p-4 grid grid-cols-2 gap-4">
                <div className="flex justify-start items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Pressure :{" "}
                  </label>
                  <label className="text-normal">
                    {forecast.main.pressure}hPa
                  </label>
                </div>
                <div className="flex justify-end items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Humidity :{" "}
                  </label>
                  <label className="text-normal">
                    {forecast.main.humidity}%
                  </label>
                </div>
                <div className="flex justify-start items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Clouds :{" "}
                  </label>
                  <label className="text-normal">{forecast.clouds.all}</label>
                </div>
                <div className="flex justify-end items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Wind Speed :{" "}
                  </label>
                  <label className="text-normal">
                    {forecast.wind.speed}m/s
                  </label>
                </div>
                <div className="flex justify-start items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Sea Level :{" "}
                  </label>
                  <label className="text-normal">
                    {forecast.main.sea_level}m
                  </label>
                </div>
                <div className="flex justify-end items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Feels Like :{" "}
                  </label>
                  <label className="text-normal">
                    {Math.round(forecast.main.feels_like - 273.15)}°C
                  </label>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Forecast;
