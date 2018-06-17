import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../store/actions/category';
import { addToCart } from '../store/actions/cart';
import { ProductTile } from './product-tile/Product-Tile';
import { Carousel } from './carousel/Carousel';
import { Loading } from '../components/loading/Loading';
import './Category.css';

class Category extends Component {

  componentWillMount() {
    this.props.getProducts();
  }

  addToCart(params) {
    let { product, quantity } = params;
    let cart = [...this.props.cart];
    const productInCart = this.props.cart.find(
      cartProduct => cartProduct.id === product.id)
    if (this.props.cart.length > 0 && !!productInCart) {
      const initialQuantity = productInCart.quantity;
      const indexOfProduct = cart.indexOf(productInCart);
      cart.splice(indexOfProduct, 1);
      quantity = quantity + initialQuantity;
      cart.push(Object.assign(product, {quantity}));
    } else {
      cart = [...this.props.cart, ...[
        Object.assign(product, {quantity})]
      ];
    }
    this.props.addToCart(cart);
  }

  render() {
    return this.props.loading ? 
      <div className="Category flex flex-column">
        <Carousel />
        <Loading />
      </div> :
      <div className="Category flex flex-column">
        <Carousel />
        <div className="Category__products-list flex flex-row flex-wrap">
          {this.props.products.map(product => 
            <ProductTile
              addToCart={() => this.addToCart({product, quantity: 1})}
              key={product.id}
              product={product}/>
          )}
        </div>
      </div>
  }
}

// Maps state data to props.
const mapStateToPros = state => {
  return ({
    products: state.category.products,
    loading: state.category.loading,
    cart: state.cart.cart
})};

// Maps dispatch actions to props.
const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  addToCart: (params) => dispatch(addToCart(params))
});

export default connect(mapStateToPros, mapDispatchToProps)(Category);
