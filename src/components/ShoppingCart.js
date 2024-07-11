import React, { useEffect, useRef } from 'react';
import './ShoppingCart.css'; // Import CSS for styling
import { FaTimes } from 'react-icons/fa'; // Import exit icon from react-icons

const ShoppingCart = ({ isVisible, cartItems, onClose }) => {
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [onClose]);

  return (
    <div ref={cartRef} className={`shopping-cart ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="shopping-cart-header">
        <h2 className="shopping-cart-header-title">Shopping Cart</h2>
        <button className="close-btn" onClick={onClose}>
          <FaTimes size={16} />
        </button>
      </div>
      {/* {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default ShoppingCart;