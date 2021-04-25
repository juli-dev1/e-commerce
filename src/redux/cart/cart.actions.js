import { CartActionTypes } from './cart.types';


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,  //== get value  'TOGGLE_CART_HIDDEN' from file cart.types.js 
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,  //== get value  'TOGGLE_CART_HIDDEN' from file cart.types.js 
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,  
    payload: item
})