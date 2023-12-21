import MeteoCard from "../MeteoCard/MeteoCard";
import './Widget.css'

function Widget ({cities}) {

    return (
        <div className='widget'>
            {cities.map((city) => (
                <MeteoCard key={city} city={city} />
            ))}
        </div>
    )
}



export default Widget ;