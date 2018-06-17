import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CartPopup } from '../cart-popup/CartPopup';
import './Header.css';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      showPopup: false,
    }
  }

  displayCartPopup() {
    this.setState({showPopup: !this.state.showPopup});
  }

  render() {
    return (
      <header className="Header">
        <img src={`${process.env.PUBLIC_URL}/media/logo.png`}
          className="App-logo" alt="logo" />
        <div className="Header__navigation-links">
          <span>HOME</span>
          <span>SHOP <i className="material-icons">arrow_drop_down</i></span>
          <span>JOURNAL</span>
          <span>MORE <i className="material-icons">arrow_drop_down</i></span>
        </div>
        <div>
          <span>MY CART ({
            this.props.cart.length > 0 ?
              this.props.cart.map(product => product.quantity)
                .reduce((a, b) => a + b) : 0
            })</span>
          <i className="material-icons"
            onClick={() => this.displayCartPopup()}>arrow_drop_down</i>
        </div>
        {this.state.showPopup ? <div onClick={() => this.displayCartPopup()}
            className="Popup-background"></div>: null}
        {this.state.showPopup ?
            <CartPopup
              totalPrice={
                this.props.cart.map(product => product.quantity * product.price)
                .reduce((a, b) => a + b)}
              cart={this.props.cart}/> : null}
      </header>
    );
  }
}

const mapStateToPros = state => {
  console.log('header', state.cart);
  return ({
    cart: state.cart.cart,
  })
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToPros, mapDispatchToProps)(Header);
