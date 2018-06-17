import { actionTypes } from './actionTypes';

/*
  Calls the reducer to display the cart popup.
  @constant
  @type {Function}
*/
export const displayCartPopup = () => ({
  type: actionTypes.SHOW_CART_POPUP
});


/**
 * Add product to cart.
 * @params {Object} cart Updated cart.
 * @constant
 */
export const addToCart = cart => dispatch => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    cart
  });
};

/**
 * Calls reducer to remove product from cart.
 * @params {Object} cart Updated cart.
 * @constant
 */
export const removeFromCart = cart => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_PRODUCT,
    cart
  });
};
