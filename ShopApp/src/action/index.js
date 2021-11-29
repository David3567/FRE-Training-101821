export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToTotal = () => {
    return { type: ADD_TO_CART }
}

export const removeFromTotal = () => {
    return { type: REMOVE_FROM_CART }
}