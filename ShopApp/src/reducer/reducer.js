import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/index";


const initialState = {
    totalItems: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                totalItems: totalItems + 1
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                totalItems: totalItems - 1
            }
        }
        default:
            return state;
    }
}

export default reducer;