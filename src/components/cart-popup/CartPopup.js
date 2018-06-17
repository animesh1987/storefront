import React from "react";
import { Link } from 'react-router-dom';
import { PopupProductItem } from './popup-product-item/PopupProductItem';
import "./CartPopup.css";

export const CartPopup = (props) => {
  return (
    props.cart.length === 0 ?
      <div className="Cart-popup">Your cart is empty</div>
     :
      <div className="Cart-popup flex flex-column">
        <div>
          {props.cart.map(product => 
            <PopupProductItem key={product.id}
              removeProduct={(id) => props.removeProduct(id)}
              product={product}/>
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
