import React from 'react';
import './Header.css'; // Import CSS for styling
import { FaShoppingCart } from 'react-icons/fa'; // Import shopping cart icon from react-icons

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        Cozy Threads
      </div>
      <div className="cart">
        <FaShoppingCart size={24} />
      </div>
    </header>
  );
};

export default Header;