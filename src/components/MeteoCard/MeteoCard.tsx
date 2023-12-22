import axios from "axios";
import { useEffect, useState } from "react";
import './MeteoCard.css'

function MeteoCard ({city}: any) {
    const [cityName, setCityName] = useState('')
    const [cityTemp, setCityTemp] = useState(0)
    const [tempIcon, setTempIcon] = useState('')

    const key = import.meta.env.VITE_OPENWEATHER_API_URL

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${city},fr&appid=${key}&units=metric`)
          .then((response) => {
            setCityName(response.data.name)
            setCityTemp(Math.round(response.data.main.temp))
            setTempIcon(response.data.weather[0].icon)
          });
      }, []);

    return (
        <div className='meteoCard'>
            <div className="info">
                <div className="cityName">{cityName}</div>
                <div className="cityCode">{city}</div>
            </div>
            <div className="temp">
                <img src={`http://openweathermap.org/img/wn/${tempIcon}@2x.png`} />
                <div className="cityTemp">{cityTemp}°C</div>
            </div>
        </div>
    )
}

export default MeteoCard ;