import React from 'react';
import './Cart-Product.css';

export const CartProduct = (props) => {
  return (
    <tr className="Cart-Product flex flex-row">
      <td className="flex flex-row">
        <img src={`${process.env.PUBLIC_URL}/media/${props.product.image}`}
          alt={props.product.title} />
        <div className="flex flex-column">
          <span>{props.product.brand}</span>
          <span>{props.product.title}</span>
        </div>
      </td>
      <td className="Cart-Product__actions flex flex-row">
        <span>{props.product.quantity}</span>
        <div className="flex flex-column">
          <i 
            className="material-icons">add</i>
          <i 
            className="material-icons">remove</i>
        </div>
      </td>
      <td>${props.product.quantity * props.product.price}.00</td>
      <td>
        <i onClick={() => props.removeFromCart(props.product.id)}
          className="material-icons">close</i>
      </td>
    </tr>
  )
};
