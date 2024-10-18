import { useState } from "react";

const Form = ({attendees = [], onDataSubmit = () => {}}) => {

    const [formData, setFormData] = useState(
        {
            nom: '',
            prenom: '',
            email: '',
            age: '',
            evenement: ''
        }
    )
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormError('');

        const isFormValid = Object.values(formData).every(value => value.trim() !== '');

        if (isFormValid) {
            onDataSubmit(formData)
        } else {
            setFormError('Veuillez remplir correctement tous les champs du formulaire.')
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nom">
                        <input type="text" name="nom" value={formData.nom} onChange={(e) => handleChange(e)} placeholder="Veuillez entrer votre nom..."/>
                    </label>
                    <label htmlFor="prenom">
                        <input type="text" name="prenom" value={formData.prenom} onChange={(e) => handleChange(e)} placeholder="Veuillez entrer votre prenom..."/>
                    </label>
                    <label htmlFor="email">
                        <input type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)} placeholder="Veuillez entrer votre email..."/>
                    </label>
                    <label htmlFor="age">
                        <input type="number" name="age" value={formData.age} onChange={(e) => handleChange(e)} placeholder="Veuillez entrer votre age..."/>
                    </label>
                    <label htmlFor="evenement">
                        <select name="evenement" value={formData.evenement} onChange={(e) => handleChange(e)}>
                            <option value="" disabled>Sélectionnez un type d&apos;événement</option>
                            <option value="conference">Conférence</option>
                            <option value="workshop">Workshop</option>
                            <option value="networking">Réseautage</option>
                        </select>
                    </label>
                </div>

                <div>
                    <button type="submit">S&apos;inscrire</button>
                </div>

                {formError && (
                    <p>{formError}</p>
                )}            
            </form>

            <div>
                <h2>
                    Informations des participants :
                </h2>
                <pre>
                    {attendees && (
                        attendees.map(attend => (
                            JSON.stringify(attend)
                        )) 
                    )}
                </pre>
            </div>
        </>
    )
}

export default Form;