import { actionTypes } from './actionTypes';

/*
  Calls the reducer to display the cart popup.
  @constant
  @type {Function}
*/
export const displayCartPopup = () => ({
  type: actionTypes.SHOW_CART_POPUP
});
