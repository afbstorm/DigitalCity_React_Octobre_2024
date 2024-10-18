import { useState } from "react";

const Counter = ({inc = 1}) => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevValue => prevValue + inc)
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>Incrément de {inc}</button>
            {
                count ? 
                <button onClick={handleReset}>Reset de la valeur</button>
                :
                null
            }

            <button style={!count ? {display: 'none'} : null} onClick={handleReset}>Reset de la valeur</button>
        </div>
    )
}

export default Counter;