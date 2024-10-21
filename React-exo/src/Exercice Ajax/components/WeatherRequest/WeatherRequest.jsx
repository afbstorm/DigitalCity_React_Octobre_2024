import { useEffect, useState } from "react";
import axios from 'axios';


const URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=__query__&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=fr`;

const WeatherRequest = ({city, onNewCity = () => {}}) => {

    const [fetching, setFetching] = useState({
        loading: false,
        data: {
            city: '',
            temp: null,
            weather: {
                description: '',
                icon: ''
            }
        },
        error: null
    })

    useEffect(() => {
        setFetching({
            loading: true,
            data: {
                city: '',
                temp: null,
                weather: {
                    description: '',
                    icon: ''
                }
            },
            error: null
        })

        axios.get(URL_WEATHER.replace('__query__', city))
        .then(({data}) => {
            setFetching({
                loading: false,
                data: {
                    city: data.name,
                    temp: data.main.temp,
                    weather: {
                        description: data.weather[0].description,
                        icon: data.weather[0].icon
                    }
                },
                error: null
            })
        })
        .catch(error => {
            setFetching({
                loading: false,
                data: null,
                error
            })
        })
    }, [city])

    useEffect(() => {
        if (fetching.data.temp !== null) {
            onNewCity(fetching.data)
        }

    }, [fetching.data, onNewCity])

    return (
        <div>
            {fetching.loading ? (
                <p>Chargement...</p>
            ) : fetching.error ? (
                <p>Erreur lors de la requête : {fetching.error}</p>
            ) : !fetching.data.temp ? (
                <p>Aucune donnée</p>
            ) : (
                <div>
                    <p>
                        La température de {fetching.data.city} est de {fetching.data.temp.toLocaleString('fr-Fr', {
                            style: 'unit',
                            unit: 'celsius'
                        })}
                    </p>

                    <p>
                        Conditions météorologiques : {fetching.data.weather.description}
                    </p>
                    {/* Icône plus grandes et plates */}
                    {/* src={`https://openweathermap.org/img/wn/${fetching.data.weather.icon}@2x.png`} */}
                    <img 
                        src={`https://openweathermap.org/img/w/${fetching.data.weather.icon}.png`}
                        alt={fetching.data.weather.description} />
                    
                </div>
            )
            }
        </div>


    )
}

export default WeatherRequest;