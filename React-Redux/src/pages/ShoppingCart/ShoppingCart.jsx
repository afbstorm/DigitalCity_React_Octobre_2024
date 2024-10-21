import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartAdd } from '../../store/actions/shoppingCart.action';
import CartForm from '../../components/CartForm/CartForm';
import CartList from '../../components/CartList/CartList';

const ShoppingCart = () => {

    // Récupération des informations de notre state avec le hook useSelector
    const products = useSelector(state => state.shoppingCart.products);
    console.log(products)

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

    return (
        <>
            <h3>Panier de course</h3>
            <h4>Formulaire : </h4>
            <CartForm onCartSubmit={handleCartSubmit} />

            <h4>Liste de course :</h4>
            <CartList products={products} />
        </>
    )
}

export default ShoppingCart;