import MeteoCard from "../MeteoCard/MeteoCard";
import './Widget.css'

function Widget ({cities} : any) {

    return (
        <div className='widget'>
            {cities.map((city : number) => (
                <MeteoCard key={city} city={city} />
            ))}
        </div>
    )
}



export default Widget ;