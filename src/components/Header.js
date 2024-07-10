import React, { useState } from 'react';
import './Header.css'; // Import CSS for styling
import { FaShoppingCart } from 'react-icons/fa'; // Import shopping cart icon from react-icons
import ShoppingCart from './ShoppingCart'; // Import the ShoppingCart component

const Header = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCartVisibility = () => {
    setCartVisible(prevState => !prevState);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <header className="header">
      <div className="brand">Cozy Threads</div>
      <div className="cart" onClick={toggleCartVisibility}>
        <FaShoppingCart size={24} />
      </div>
      <ShoppingCart isVisible={isCartVisible} items={cartItems} onClose={closeCart} />
    </header>
  );
};

export default Header;