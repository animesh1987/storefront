import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayCartPopup } from '../../store/actions/cart';
import './Header.css';

class Header extends Component {
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
          <span>MY CART ({this.props.cart.length})</span>
          <i className="material-icons"
            onClick={() => this.props.displayCartPopup()}>arrow_drop_down</i>
        </div>
      </header>
    );
  }
}

// Map component state to props.
const mapStateToPros = state => {
  return ({
    cart: state.cart.cart,
  })
};

// Map component actions state to props.
const mapDispatchToProps = dispatch => ({
  displayCartPopup: () => dispatch(displayCartPopup())
});

export default connect(mapStateToPros, mapDispatchToProps)(Header);
