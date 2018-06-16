import { actionTypes } from '../actions/actionTypes';

/*
  Initial state of header.
  @constant
  @type {Object}
*/
const initialState = {
  cart: [],
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_CART_POPUP: {
      return {
        ...state
      }
    }

    default:
      return state;
  }
};

export default header;
