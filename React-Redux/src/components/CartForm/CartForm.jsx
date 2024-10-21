import { useState } from "react";

const CartForm = ({onCartSubmit = () => {}}) => {

        const [formData, setFormData] = useState({
            name: '',
            quantity: 1
        })

        const handleChange = (e) => {
            e.preventDefault();
            const {name, value} = e.target;
            setFormData(prevValue => ({...prevValue, [name]: value}));
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            const quantity = parseInt(formData.quantity);
            if (isNaN(quantity) || quantity < 1) {
                alert('SVP entrez un nombre valide')
                return;
            }

            if (!formData.name.trim()) {
                alert('SVP entre un nom de produit')
                return;
            }

            onCartSubmit({
                quantity,
                name: formData.name.trim()
            })

            setFormData({
                name: '',
                quantity: 1
            })

        }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nom de produit :</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="quantity">Nombre d&apos;articles :</label>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min='1' />
            </div>
            <button type="submit">Ajout au panier</button>

        </form>
    )
}

export default CartForm;