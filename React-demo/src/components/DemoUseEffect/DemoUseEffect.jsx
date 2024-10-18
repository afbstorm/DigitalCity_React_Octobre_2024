import { useEffect, useState } from "react";

const DemoUseEffect = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [isEven, setIsEven] = useState(true);

    useEffect(() => {
        console.log("useEffect 1 : il s'exécute dès qu'un changement s'effectue dans le composant")
    })

    useEffect(() => {
        console.log("useEffect 2 (tableau de dépendance) : il s'exécute UNE FOIS au début du cycle de vie du composant")
    }, [])

    useEffect(() => {
        console.log("useEffect 3 : il s'exécute dès qu'un changement s'effectue dans l'élément de son tableau de tableau de dépendance")
        setIsEven(count % 2 === 0);
    }, [count])

    useEffect(() => {
        console.log("useEffect 4 : active un abonnement au changement de la valeur de name")
        const timer = setTimeout(() => {
            console.log('Abonnement crée avec succès ✔')
        }, 2000)

        return (() => {
            console.log('Désabonné 🐱‍👤')
            clearTimeout(timer)
        })

    }, [name])

    return (
        <div>
            <p>Compteur : {count} et est {isEven ? 'pair' : 'impair'}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Incrémenter</button>

            <br />

            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />
            <p>Nom : {name}</p>
        </div>
    )
}

export default DemoUseEffect;