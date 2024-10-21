import { useState, useEffect } from "react";

const PersonRequest = ({firstname}) => {

    const [fetchingInfo, setFetchingInfo] = useState({
        loading: false,
        data: null,
        error: null
    });
    
    useEffect(() => {
        setFetchingInfo({loading: true, data: null, error: null})

        // const baseUrl = `https://api.agify.io/?name=${firstname}&country_id=be`

        const baseUrl = 'https://api.agify.io/?name=__FIRSTNAME__&country_id=be';
        fetch(baseUrl.replace('__FIRSTNAME__', firstname)) // Promise<Response>
        .then(response => response.json()) // Promise<any>
        .then(data => {
            setFetchingInfo({loading: false, data, error: null})
        })
        .catch(error => {
            setFetchingInfo({loading: false, data: null, error})
        })

    }, [firstname])


  return (
    <>
        <h2>Résultat de la requête :</h2>
        {fetchingInfo.loading ? (
            <PersonRequestLoading />
        ) : fetchingInfo.data ? (
            <PersonRequestSuccess {...fetchingInfo.data} />
        ) : (
            <PersonRequestError error={fetchingInfo.error} />
        )}
    </>
  )
}

const PersonRequestLoading = () => ( 
    <p>Requête en cours... 🕰</p>
)


const PersonRequestSuccess = ({age, name}) => {
    return (
        <p>L&apos;âge potentiel de {name} est {age} ans</p>
    )
} 

const PersonRequestError = ({error}) => {
    return (
        <p>{error}</p>
    )
}

export default PersonRequest;