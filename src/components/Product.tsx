import React from 'react';
import './Product.css'; // Import CSS for styling
import { Item } from '../App'

interface ProductProps {
  item: Item;
  onAddToCart: (product: Item) => void;
};

const Product: React.FC<ProductProps> = ({ item, onAddToCart }) => {
  const handlAddToCart = () => {
    onAddToCart(item);
  };

  return (
    <div className="product">
      <img src={item.imageLink} alt={item.title} className="product-image" />
      <h2 className="product-title">{item.title}</h2>
      <p className="product-description">{item.description}</p>
      <p className="product-price">${item.price}</p>
      <button onClick={handlAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;