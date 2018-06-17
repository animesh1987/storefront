import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../store/actions/cart';
import { CartPopup } from '../cart-popup/CartPopup';
import './Header.css';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      showPopup: false,
    }
  }

  // Handles toggling of cart popup.
  displayCartPopup() {
    this.setState({showPopup: !this.state.showPopup});
  }

  // Removes product from cart.
  removeProduct(id) {
    let cart = [...this.props.cart];
    const productInCart = this.props.cart.find(
      product => product.id === id);
    const indexOfProduct = cart.indexOf(productInCart);
    cart.splice(indexOfProduct, 1);
    this.props.removeFromCart(cart);
  }

  render() {
    return (
      <header className="Header">
        <Link to={'/'}>
          <img src={`${process.env.PUBLIC_URL}/media/logo.png`}
            className="App-logo" alt="logo" />
        </Link>
        <div className="Header__navigation-links">
          <span>HOME</span>
          <span>SHOP <i className="material-icons">arrow_drop_down</i></span>
          <span>JOURNAL</span>
          <span>MORE <i className="material-icons">arrow_drop_down</i></span>
        </div>
        <div>
          <span>MY CART ({this.props.quantity})</span>
          <i className="material-icons"
            onClick={() => this.displayCartPopup()}>arrow_drop_down</i>
        </div>
        {this.state.showPopup ? <div onClick={() => this.displayCartPopup()}
            className="Popup-background"></div>: null}
        {this.state.showPopup ?
          <CartPopup
            removeProduct={(id) => this.removeProduct(id)}
            totalPrice={this.props.total}
            cart={this.props.cart}/> : null}
      </header>
    );
  }
}

const mapStateToPros = state => {
  // Get total of cart and pass it to props.
  const cartTotal = state.cart.cart.length > 0 ?
    state.cart.cart.map(product => product.quantity * product.price)
    .reduce((a, b) => a + b) : 0;

  // Get total of number of products in cart.
  const cartQuantity = state.cart.cart.length > 0 ?
    state.cart.cart.map(product => product.quantity)
    .reduce((a, b) => a + b) : 0;

  return ({
    cart: state.cart.cart,
    total: cartTotal,
    quantity: cartQuantity,
  })
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: (params) => dispatch(removeFromCart(params))
});

export default connect(mapStateToPros, mapDispatchToProps)(Header);
