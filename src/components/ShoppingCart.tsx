import React, { useEffect, useRef } from 'react';
import './ShoppingCart.css'; // Import CSS for styling
import { FaTimes } from 'react-icons/fa'; // Import exit icon from react-icons
import { Item } from '../App';

interface ShoppingCartProps {
  isVisible: boolean;
  cartItems: Item[];
  onClose: () => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isVisible, cartItems, onClose }) => {
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
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
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.imageLink}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
          <form action="/create-checkout-session" method="POST">
            <button type="submit">
              Checkout
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;