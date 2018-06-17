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
 * @params {Object} params Present cart, product and quantity.
 * @constant
 */
export const addToCart = params => dispatch => {
  let { product, quantity } = params;
  let cart = [...params.cart];
  const productInCart = params.cart.find(
    cartProduct => cartProduct.id === product.id);
  if (params.cart.length > 0 && !!productInCart) {
    const initialQuantity = productInCart.quantity;
    const indexOfProduct = cart.indexOf(productInCart);
    cart.splice(indexOfProduct, 1);
    quantity = quantity + initialQuantity;
    cart.push(Object.assign(product, {quantity}));
  } else {
    cart = [...params.cart, ...[
      Object.assign(product, {quantity})]
    ];
  }
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
