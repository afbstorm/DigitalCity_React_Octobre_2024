import { createAction, nanoid } from '@reduxjs/toolkit';

export const shoppingCartAdd = createAction('shopping-cart/add', (data) => {
    return {
        payload: {
            ...data,
            id: nanoid(),
            isValid: false
        }
    }
})
export const shoppingCartRemove = createAction('shopping-cart/remove');
export const shoppingCartValid = createAction('shopping-cart/valid');
export const shoppingCartClear = createAction('shopping-cart/clear');