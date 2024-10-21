import { useState } from "react";
import PersonRequest from "../../components/PersonRequest/PersonRequest";
import SearchForm from "../../components/SearchForm/SearchForm";

const PersonInfo = () => {
    const [target, setTarget] = useState(null);

    console.log('prénom recherché', target)

    const handleSearchFirstname = (query) => {
        setTarget(query)
    }

    return (
        <>
            <SearchForm 
                label='Prénom'
                btnSubmitText="🔎"
                onSearch={handleSearchFirstname}/>

            {target ? (
                <PersonRequest firstname={target}/>
            )
            :
            (
                <p>Pas de requête</p>
            )}
            
        </>
    )
}

export default PersonInfo;