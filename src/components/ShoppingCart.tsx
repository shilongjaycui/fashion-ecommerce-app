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
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {Object.values(cartItems).map(({ item, count }) => (
              <li key={item.imageLink}>
                <span>{item.title} - ${item.price} x {count} = {item.price * count}</span>
                <button onClick={() => onRemoveFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>
            <p>Total: ${totalCost.toFixed(2)}</p>
            <form action="/create-checkout-session" method="POST">
              <button type="submit">
                Checkout
              </button>
            </form>
            <button onClick={() => onClearCart()}>Clear Shopping Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;