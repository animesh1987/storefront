import React from "react";
import { Link } from 'react-router-dom';
import "./CartPopup.css";

export const CartPopup = (props) => {
  return (
    props.cart.length === 0 ?
      <div className="Cart-popup">Your cart is empty</div>
     :
      <div className="Cart-popup flex flex-column">
        <div>
          {props.cart.map(product => 
            <div className="Cart-popup__row flex flex-row" key={product.id}>
              <img src={`${process.env.PUBLIC_URL}/media/${product.image}`} alt={product.title} />
              <div className="flex flex-column">
                <p>{product.title} <span>x {product.quantity}</span></p>
                <p>{product.brand}</p>
                <p>${product.price}.00</p>
              </div>
              <i className="material-icons">close</i>
            </div>
          )}
        </div>
        <div className="Cart-popup__total flex flex-row">
          <span>TOTAL</span>
          <span>${props.totalPrice}.00</span>
        </div>
        <div className="Cart-popup__actions flex">
          <Link className="button" to={'/cart'}>View Cart</Link>
          <button>Checkout</button>
        </div>
      </div>
  )
}
