import { actionTypes } from './actionTypes';

// Url for getting products.
const PRODUCTS = '/products.json';

/*
  Calls the reducer to display the cart popup.
  @constant
  @type {Function}
*/
async function callApi(baseUrl) {
  return await fetch(baseUrl);
}

/*
  Fetch product list.
  @constant
*/
export const getProducts = () => async(dispatch) => {
  try {
    const response = await callApi(PRODUCTS);
    const data =  await response.json();
    return dispatch({
      type: actionTypes.GET_PRODUCTS,
      products: data,
      loading: false
    });
  } catch(e) {
    console.log(e);
  }
};

/*
  Fetch product by for the id passed.
  @constant
*/
export const getProductById = params => async(dispatch) => {
  try {
    const response = await callApi(PRODUCTS);
    const data =  await response.json();
    const product = data.find(product => product.id === params.id);
    console.log(product);
    return dispatch({
      type: actionTypes.GET_PRODUCT_BY_ID,
      product,
      loading: false
    });
  } catch(e) {
    console.log(e);
  }
};
