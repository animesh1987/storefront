import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../store/actions/cart';
import { CartProduct } from './cart-product/Cart-Product';
import './Cart.css';

class Cart extends Component {

  // Removes product from cart.
  removeProduct(id) {
    let cart = [...this.props.cart];
    this.props.removeFromCart({ cart, id});
  }

  render() {
    return (
      <div className="Cart">
          <h2>Shopping Cart</h2>
          <div className="Cart__container">
            <table>
              <thead>
                <tr className="Cart__container-header">
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="flex flex-column">
                {this.props.cart.map(product =>
                  <CartProduct key={product.id}
                    removeFromCart={(id) => this.removeProduct(id)}
                    product={product} />)}
              </tbody>
            </table>
            <div className="Cart__overview-container">
              <div className="Cart__overview flex flex-column">
                <p>Cart Overview</p>
                <p className="flex flex-row">
                  Subtotal <span>${this.props.total}.00</span></p>
                <p className="flex flex-row">
                  Total <span>${this.props.total}.00 AUD</span></p>
              </div>
            </div>
            <div className="flex flex-row Cart_actions">
              <Link to={'/'}>Continue Shopping</Link>
              <button>Checkout(${this.props.total}.00)</button>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToPros = state => {
  // Get total of cart and pass it to props.
  const cartTotal = state.cart.cart.length > 0 ?
    state.cart.cart.map(product => product.quantity * product.price)
    .reduce((a, b) => a + b) : 0;

  return ({
    cart: state.cart.cart,
    total: cartTotal,
  })
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: (params) => dispatch(removeFromCart(params))
});

export default connect(mapStateToPros, mapDispatchToProps)(Cart);
