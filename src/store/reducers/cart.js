import { actionTypes } from '../actions/actionTypes';

/*
  Initial state of header.
  @constant
  @type {Object}
*/
const initialState = {
  cart: [{
    "id": "1",
    "title": "Blue Stripe Stoneware Plate",
    "brand": "Kiriko",
    "price": 40,
    "quantity": 1,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    "image": "blue-stripe-stoneware-plate.jpg"
  }],
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
        cart: action.cart
      }
    }

    case actionTypes.REMOVE_PRODUCT: {
      return {
        ...state,
        cart: action.cart
      }
    }

    default:
      return state;
  }
};

export default cart;
