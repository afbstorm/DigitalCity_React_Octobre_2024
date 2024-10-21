import { useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import WeatherRequest from "../../components/WeatherRequest/WeatherRequest";
import { useCallback } from "react";
import CitiesList from "../../components/CitiesList/CitiesList";

const WeatherApp = () => {

    const [city, setCity] = useState('');
    const [cities, setCities] = useState([]);

    const handleCitySearch = (cityName) => {
        setCity(cityName)
    }

    const handleNewCities = useCallback((data) => {
        if (data.temp !== null) {
            setCities(prevCity => [...prevCity, data])
        }
    }, [])

    return (
        <div>
            <h2>Recherche de la météo :</h2>
            <Searchbar label="Nom de la ville" onSearch={handleCitySearch}/>

            <h2>Résultat de la recherche : </h2>
            {!city ? (
                <p>Aucune recherche effectuée pour le moment</p>
            ) : (
                <WeatherRequest city={city} onNewCity={handleNewCities}/>
            )}

            {cities.length > 2 && (
                <CitiesList cities={cities} />
            )}

        </div>
    )
}

export default WeatherApp;