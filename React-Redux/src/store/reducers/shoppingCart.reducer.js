import { createReducer } from "@reduxjs/toolkit";
import { shoppingCartAdd, shoppingCartRemove, shoppingCartValid, shoppingCartClear } from "../actions/shoppingCart.action";

const initialState = {
    products: [],
    count: 0
};

// Le builder est un pattern fourni par Redux ToolKit qui permet de construire le reducer de manière plus déclarative.
// Il utilise des méthodes comme addCase() pour définir comment l'état doit changer suivant les actions utilisées.

const shoppingCartReducer = createReducer(initialState, builder => {
    builder
        // Ajouter un produit au panier
        .addCase(shoppingCartAdd, (state, action) => {
            const product = action.payload;
            state.products.push(product);
            state.count++
        })
        // Supprimer un produit du panier via son id
        .addCase(shoppingCartRemove, (state, action) => {
            const productId = action.payload;
            // On filtre le state pour garder tous les produits sauf celui à supprimer
            state.products = state.products.filter(prd => prd.id !== productId);
            state.count = state.products.length;
        })
        .addCase(shoppingCartValid, (state, action) => {
            const productId = action.payload;
            // On trouve l'id correspondant à l'id du payload
            const product = state.products.find(prd => prd.id === productId);
            if (product) {
                product.isValid = true;
            }
        })
        .addCase(shoppingCartClear, (state) => {
            state.products = [];
            state.count = 0;
        })
})

export default shoppingCartReducer;