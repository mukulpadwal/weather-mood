import { useEffect } from "react";
import { OPEN_WEATHER_BASE_URL } from "../../api/openWeatherApi.js";

const Current = ({ lat, lon }) => {

    // useEffect(() => {

        fetch(`${OPEN_WEATHER_BASE_URL}&lat=${lat}&lon=${lon}`)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => console.log(error)); 

    // }, []);   

    return (
        <div>

        </div>
    )
}

export default Current;