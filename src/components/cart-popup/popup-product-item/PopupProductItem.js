import React from "react";

export const PopupProductItem = (props) => {
  const { product } = props;
  return (
    <div className="Cart-popup__row flex flex-row" key={product.id}>
      <img src={`${process.env.PUBLIC_URL}/media/${product.image}`} alt={product.title} />
      <div className="flex flex-column">
        <p>{product.title} <span>x {product.quantity}</span></p>
        <p>{product.brand}</p>
        <p>${product.price}.00</p>
      </div>
      <i onClick={() => props.removeProduct(product.id)}
        className="material-icons">close</i>
    </div>
  );
};
