const DateDuJour = () => {

    const day = new Date()
    const formattedDate = day.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
    })

    return (
        <>{formattedDate}</>
    )
}

export default DateDuJour;