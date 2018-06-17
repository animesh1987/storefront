import { actionTypes } from './actionTypes';

/**
 * Add product to cart.
 * @param {Object} params Present cart, product and quantity.
 * @constant
 */
export const addToCart = params => dispatch => {
  let { product, quantity } = params;
  let cart = [...params.cart];
  const productInCart = cart.find(
    cartProduct => cartProduct.id === product.id);
  if (cart.length > 0 && !!productInCart) {
    const initialQuantity = productInCart.quantity;
    const indexOfProduct = cart.indexOf(productInCart);
    cart.splice(indexOfProduct, 1);
    quantity = quantity + initialQuantity;
    // Insert the product at initial index after update.
    cart.splice(indexOfProduct, 0,
      Object.assign(product, {quantity}));
  } else {
    cart = [...cart, ...[
      Object.assign(product, {quantity})]
    ];
  }
  dispatch({
    type: actionTypes.ADD_TO_CART,
    cart
  });
};

/**
 * Decrease product quantity by 1.
 * @param {Object} params Present cart, product and quantity.
 * @constant
 */
export const decreaseProductQuantity = params => dispatch => {
  let { product, quantity } = params;
  let cart = [...params.cart];
  const productInCart = cart.find(
    cartProduct => cartProduct.id === product.id);
  let initialQuantity = productInCart.quantity;
  const indexOfProduct = cart.indexOf(productInCart);
  cart.splice(indexOfProduct, 1);
  if (initialQuantity > 1) {
    quantity = quantity + initialQuantity;
    // Insert the product at initial index after update.
    cart.splice(indexOfProduct, 0,
      Object.assign(product, {quantity}));
  }
  dispatch({
    type: actionTypes.ADD_TO_CART,
    cart
  });
};

/**
 * Calls reducer to remove product from cart.
 * @param {Object} params Present cart and product id.
 * @constant
 */
export const removeProductFromCart = params => dispatch => {
  let cart = [...params.cart];
  const productInCart = cart.find(
    product => product.id === params.id);
  const indexOfProduct = cart.indexOf(productInCart);
  cart.splice(indexOfProduct, 1);
  dispatch({
    type: actionTypes.REMOVE_PRODUCT,
    cart
  });
};
