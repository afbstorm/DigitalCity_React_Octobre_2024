import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./reducers/shoppingCart.reducer";

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    },
    devTools: import.meta.env.DEV
});
