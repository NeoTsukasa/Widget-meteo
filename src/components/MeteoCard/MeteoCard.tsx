import axios from "axios";
import { useEffect, useState } from "react";
import './MeteoCard.css'

function MeteoCard ({city}) {
    const [cityName, setCityName] = useState('')
    const [cityTemp, setCityTemp] = useState(0)
    const [tempIcon, setTempIcon] = useState('')

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${city},fr&appid=aba1540d3845e1b041b4dbde28c2e286&units=metric`)
          .then((response) => {
            setCityName(response.data.name)
            setCityTemp(Math.round(response.data.main.temp))
            setTempIcon(response.data.weather[0].icon)
          });
      }, []);

    return (
        <div className='meteoCard'>
            <div className="cityName">{cityName}</div>
            <div className="CityCode">{city}</div>
            <div className="CityTemp">{cityTemp}°C</div>
            <img src={`http://openweathermap.org/img/wn/${tempIcon}@2x.png`} />
        </div>
    )
}

export default MeteoCard ;