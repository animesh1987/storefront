import { actionTypes } from '../actions/actionTypes';

/**
 * Initial state of category.
 * @type {Object}
 * @constant
 */
const initialState = {
  products: [],
  loading: true,
  cart: [],
  product: {},
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

    case actionTypes.GET_PRODUCT_BY_ID: {
      return {
        ...state,
        product: action.product,
        loading: action.loading,
      }
    }

    default:
      return state;
  }
};

export default category;
