const CartItem = ({id, name, quantity, isValid}) => {

    return (
        <li>{quantity}x {name}</li>
    )
}

const CartList = ({products = []}) => {

    return (
        <ul>
            {products.map(prd => <CartItem key={prd.id} {...prd} />)}
        </ul>
    )
}

export default CartList;