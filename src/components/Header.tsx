import React, { useState } from 'react';
import './Header.css'; // Import CSS for styling
import { FaShoppingCart } from 'react-icons/fa'; // Import shopping cart icon from react-icons
import { Item } from '../App';
import ShoppingCart from './ShoppingCart'; // Import the ShoppingCart component

interface HeaderProps {
  cartItems: Item[];
};

const Header: React.FC<HeaderProps> = ({ cartItems }) => {
  const [isCartVisible, setCartVisible] = useState<boolean>(false);

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
      <ShoppingCart isVisible={isCartVisible} cartItems={cartItems} onClose={closeCart} />
    </header>
  );
};

export default Header;