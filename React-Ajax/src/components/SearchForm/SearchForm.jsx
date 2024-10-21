import { useEffect, useRef, useState, useId } from "react"

const SearchForm = ({label = undefined, btnSubmitText = 'Rechercher', onSearch = () => {} }) => {

    const formId = useId();
    const [query, setQuery] = useState('');
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);

        setQuery('');
        inputRef.current.focus();
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(query)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }

    }, [query])

  return (
    <form onSubmit={handleSubmit}>
        {label && (
            <label htmlFor={formId}>{label} :</label>
        )}
        <input 
            type="text" 
            id={formId}
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
             />
        <button type="submit">{btnSubmitText}</button>
    </form>

  )
}

export default SearchForm