import React from 'react';
import { Link } from 'react-router-dom'
import './Overlay.css';

export const Overlay = props => {
  return (
    <div className={props.classToDisplay}>
      <Link
        className="button"
        to={`/product/${props.id}`}>View Details</Link> 
      <button
        onClick={props.addToCart}>Add to cart</button>
    </div>
  );
};
