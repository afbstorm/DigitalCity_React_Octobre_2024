import { useDispatch, useSelector } from 'react-redux';
import {
    shoppingCartAdd,
    shoppingCartClear,
    shoppingCartRemove,
    shoppingCartValid
} from '../../store/actions/shoppingCart.action';
import CartForm from '../../components/CartForm/CartForm';
import CartList from '../../components/CartList/CartList';

const ShoppingCart = () => {

    // Récupération des informations de notre state avec le hook useSelector
    const products = useSelector(state => state.shoppingCart.products);

    // Hook pour envoyer une valeur via une action à un reducer
    const dispatch = useDispatch();

    const handleCartSubmit = (cart) => {
        // // On crée l'action via l'action creator
        // const action = shoppingCartAdd(cart);

        // // On dispatch (envoi) la valeur au reducer
        // dispatch(action)

        // En une ligne 👀
        dispatch(shoppingCartAdd(cart))
    }
    const handleDelete = (productId) => {
        dispatcher(shoppingCartRemove(productId));
    };

    const handleValidate = (productId) => {
        dispatcher(shoppingCartValid(productId));
    };

    const handleClear = () => {
        dispatcher(shoppingCartClear());
    };
    return (
        <>
            <h1>Panier de course</h1>
            <h2>Formulaire...</h2>
            <CartForm onCartSubmit={handleCartSubmit} />

            <br />
            <h2>Liste des course</h2>
            <CartList products={products}
                      onDelete={handleDelete}
                      onValidate={handleValidate}
                      onClear={handleClear} />

        </>
    )
}

export default ShoppingCart;
