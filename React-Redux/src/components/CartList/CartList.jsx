const CartItem = ({id, name, quantity, isValid, onDelete, onValidate}) => {

    return (
        <li style={{
            textDecoration: isValid ? 'line-through' : 'none',
            color: isValid ? 'grey' : 'black',
            listStyle: 'none'
        }}>
            {quantity}x {name}
            <button
                onClick={() => onDelete(id)}
                style={{marginLeft: '10px'}}
            >
                Delete
            </button>
            {!isValid && (
                <button
                    onClick={() => onValidate(id)}
                    style={{marginLeft: '10px'}}
                >
                    Validate
                </button>
            )}
        </li>
    )
}

const CartList = ({products = [], onDelete, onValidate, onClear }) => {
    return (
        <div>
            <ul>
                {products.map(p => (
                    <CartItem
                        {...p}
                        key={p.id}
                        onDelete={onDelete}
                        onValidate={onValidate}
                    />
                ))}
            </ul>
            {products.length > 0 && (
                <button onClick={onClear}>Clear All</button>
            )}
        </div>
    );
}

export default CartList;
