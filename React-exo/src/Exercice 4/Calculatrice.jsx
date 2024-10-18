import { useState, useId } from "react";

// const operationEnum = {
//     PLUS: '+',
//     MINUS: '-',
//     MULTI: '*',
//     DIV: '/'
// }

// Object.freeze(operationEnum)


const Calculatrice = () => {

    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [ope, setOpe] = useState('');
    const [result, setResult] = useState('');

    const inputId = useId();

    const handleCalculation = (e) => {
        e.preventDefault()

        let calculationResult;
        let error = null;

        const val1 = parseFloat(nb1);
        const val2 = parseFloat(nb2);

        if (isNaN(val1) || isNaN(val2)) return;

        switch (ope) {
            case '+' : 
                calculationResult = val1 + val2
                break;
            case '-' :
                calculationResult = val1 - val2
                break;
            case '*' :
                calculationResult = val1 * val2
                break;
            case '/' :
                if (val2 === 0) {
                    error = 'Division par zéro impossible'
                }
                calculationResult = val1 / val2
                break;

            default :
                error = 'Opérateur non renseigné'
                break;
        }

        if (!error) {
            setResult(calculationResult);
        }


    }

    return (
        <form onSubmit={handleCalculation}>
            <label htmlFor={`${inputId}-nb1`}>
                <input 
                    type="text"
                    id={`${inputId}-nb1`}
                    value={nb1}
                    onChange={(e) => setNb1(e.target.value)}/>
            </label>

            <label htmlFor={`${inputId}-ope`}>
                <select id={`${inputId}-ope`} value={ope} onChange={(e) => setOpe(e.target.value)}>
                    <option value="" disabled>Sélectionnez une opération</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </label>

            <label htmlFor={`${inputId}-nb2`}>
                <input 
                    type="text"
                    id={`${inputId}-nb2`} 
                    value={nb2}
                    onChange={(e) => setNb2(e.target.value)}/>
            </label>

            <button type="submit">Calculer</button>

            <label htmlFor={`${inputId}-result`}>
                <input type="text" id={`${inputId}-result`} value={result} readOnly/>
            </label>
        </form>
    )
}

export default Calculatrice;