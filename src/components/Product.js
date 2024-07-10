import React from 'react';
import './Product.css'; // Import CSS for styling

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default Product;