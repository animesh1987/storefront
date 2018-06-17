import React from 'react';
import './Cart-Product.css';

export const CartProduct = (props) => {
  const { product } = props;
  return (
    <tr className="Cart-Product flex flex-row">
      <td className="flex flex-row">
        <img src={`${process.env.PUBLIC_URL}/media/${product.image}`}
          alt={product.title} />
        <div className="flex flex-column">
          <span>{product.brand}</span>
          <span>{product.title}</span>
        </div>
      </td>
      <td className="Cart-Product__actions flex flex-row">
        <span>{product.quantity}</span>
        <div className="flex flex-column">
          <i onClick={() => 
            props.updateProductQuantity({type: 'increment', product})}
            className="material-icons">add</i>
          <i onClick={() => 
            props.updateProductQuantity({type: 'decrement', product})}
            className="material-icons">remove</i>
        </div>
      </td>
      <td>${product.quantity * product.price}.00</td>
      <td>
        <i onClick={() => props.removeProductFromCart(product.id)}
          className="material-icons">close</i>
      </td>
    </tr>
  )
};
