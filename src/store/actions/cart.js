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
 * @params {Object} params Object containing product with quantity to be added.
 * @constant
 */
export const addToCart = cart => dispatch => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    cart
  });
};
