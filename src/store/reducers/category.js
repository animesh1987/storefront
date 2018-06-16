import { actionTypes } from '../actions/actionTypes';

/*
  Initial state of category.
  @constant
  @type {Object}
*/
const initialState = {
  products: [],
  loading: true,
  cart: [],
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS: {
      return {
        ...state,
        products: action.products,
        loading: action.loading,
      }
    }

    default:
      return state;
  }
};

export default category;
