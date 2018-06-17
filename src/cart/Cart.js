import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/actions/cart';
import { CartProduct } from './cart-product/Cart-Product';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
          <h2>Shopping Cart</h2>
          <table className="Cart__container">
            <thead>
              <tr className="Cart__container-header">
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map(product =>
                <CartProduct key={product.id}
                  product={product} />)}
            </tbody>
          </table>
      </div>
    );
  }
}

const mapStateToPros = state => {
  return ({
    cart: state.cart.cart,
  })
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: (params) => dispatch(removeFromCart(params))
});

export default connect(mapStateToPros, mapDispatchToProps)(Cart);
