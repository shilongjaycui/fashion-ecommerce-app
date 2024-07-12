import React, { useEffect, useRef } from 'react';
import './ShoppingCart.css'; // Import CSS for styling
import { FaTimes } from 'react-icons/fa'; // Import exit icon from react-icons
import { Item, CartItem } from '../App';

interface ShoppingCartProps {
  isVisible: boolean;
  cartItems: { [key: string]: CartItem };
  onClose: () => void;
  onRemoveFromCart: (item: Item) => void;
  onClearCart: () => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ 
  isVisible, 
  cartItems, 
  onClose, 
  onRemoveFromCart, 
  onClearCart,
}) => {
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
  
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems }),
      });

      const { url } = await response.json();
      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };
  
  const totalCost = Object.values(cartItems).reduce((acc, { item, count }) => {
    return acc + item.price * count;
  }, 0);
  
  return (
    <div ref={cartRef} className={`shopping-cart ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="shopping-cart-header">
        <h2 className="shopping-cart-header-title">Shopping Cart</h2>
        <button className="close-btn" onClick={onClose}>
          <FaTimes size={16} />
        </button>
      </div>
      {Object.keys(cartItems).length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <ul className="cart-items-list">
            {Object.values(cartItems).map(({ item, count }) => (
              <li key={item.imageLink} className="cart-item">
                <div className="cart-item-details">
                  <div className="item-info">
                    <span>{item.title}</span>
                  </div>
                  <div className="item-count">
                    <span>{count}</span>
                  </div>
                  <div className="item-total-cost">
                    <span>${(item.price * count).toFixed(2)}</span>
                  </div>
                  <div className="remove-btn-container">
                    <button className="remove-btn" onClick={() => onRemoveFromCart(item)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p className="total-message">Total: ${totalCost.toFixed(2)}</p>
            <div className="cart-buttons">
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
              <button className="clear-cart-btn" onClick={() => onClearCart()}>Clear Shopping Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;