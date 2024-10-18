const ListItems = ({name, price, isPromo}) => {

    return (
        <li>
            <h3>
                {name}
            </h3>
            <p style={isPromo ? {color: 'red'} : null}>
                {price.toLocaleString('fr-FR', {style: 'currency', currency: 'eur'})}
            </p>
        </li>
    )
}

export default ListItems;