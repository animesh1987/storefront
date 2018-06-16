import { actionTypes } from '../actions/actionTypes';

/*
  Initial state of header.
  @constant
  @type {Object}
*/
const initialState = {
  cart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_CART_POPUP: {
      return {
        ...state
      }
    }

    case actionTypes.ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, ...action.cart]
      }
    }

    default:
      return state;
  }
};

export default cart;
