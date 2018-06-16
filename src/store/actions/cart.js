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
 * @constant
 */
export const addToCart = product => dispatch => {
  const cart = [product];
  dispatch({
    type: actionTypes.ADD_TO_CART,
    cart
  });
};
