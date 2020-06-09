import React from 'react';
import './Product.css';
 

export default function Product({ onAddToCartClick, price, title}) {
  return (
    <div className="Product">
      <div><img src="/img/parsley.jpg"/></div>
      <h1 className="Product-title">{title}</h1>
      <div className="Product-price">${price}</div>
      <button className="Product-buy-button" onClick={onAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
}
