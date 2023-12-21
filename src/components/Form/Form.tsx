import axios from "axios";
import { useState } from "react";
import './Form.css'

function Form ({setCities, cities}) {
    const [newCP, setNewCP] = useState(0);
    const [error, setError] = useState('')
    const key = import.meta.env.VITE_OPENWEATHER_API_URL

    const handleChange = (event) => {
      setNewCP(event.target.value);
    };
  
    const searchCP = (event) => {
      event.preventDefault();
      
        if (cities.includes(newCP)) { setError('La ville est déjà présente !')}
        else{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${newCP},fr&appid=${key}&units=metric`)
            .then((response) => { 
                
                if (response.data.cod = 200) {
                setError('')
                setCities(cities => [...cities, newCP])

            }})
            .catch( error => {
              if (error.response.data.cod === '404'){ setError("La ville n'a pas été trouvée...")}
                else{setError("Une erreur est survenue, veuillez réessayer.")} })
          };

    };

    return (
        <div className="addNew">
        <h2>Entrez un code postal pour ajouter une ville</h2>
        <form className='form' onSubmit={searchCP}>
         <input type="number" onChange={handleChange} />
        </form>
        <div className='error'>{error}</div>
        </div>
    )
}


export default Form ;
