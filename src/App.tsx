import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product"
import Header from "./components/Header"

export interface Item {
  imageLink: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItem {
  item: Item;
  count: number;
}

const chanelHandbag: Item = {
  imageLink: 'https://www.chanel.com/images//t_one///q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1240/mini-classic-handbag-pink-fuchsia-purple-wool-cotton-mixed-fibers-gold-tone-metal-wool-cotton-mixed-fibers-gold-tone-metal-packshot-artistique-vue1-a69900b17528ny718-9542488915998.jpg',
  title: 'Mini Classic Handbag',
  description: 'Wool, Cotton, Mixed Fibers & Gold-Tone Metal Pink, Fuchsia & Purple',
  price: 5200,
};
const diorCologne: Item = {
  imageLink: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw32ba9f5d/Y0996460/Y0996460_C099600755_E01_ZHC.jpg?sw=1800&sh=1200',
  title: 'Sauvage Elixir',
  description: 'Elixir - Spicy, Fresh and Woody Notes',
  price: 180,
};
const hermesBracelet: Item = {
  imageLink: 'https://assets.hermes.com/is/image/hermesproduct/roulis-double-tour-bracelet--071727FP3Q-front-wm-2-0-0-800-800_g.jpg',
  title: 'Roulis Double Tour bracelet',
  description: 'Braided double tour bracelet in Swift calfskin with palladium-plated Roulis closure.',
  price: 395,
};
const armaniWatch: Item = {
  imageLink: 'https://www.armani.com/variants/images/1647597326828723/F/w800.jpg',
  title: 'Three-Hand Date Two-Tone Stainless Steel Watch',
  description: '32mm watch features a mother of pearl glossy dial, three-hand date movement and two-tone stainless steel and IP pale gold-tone case and bracelet.',
  price: 325,
};
const gucciHandbag: Item = {
  imageLink: 'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1708502466/795466_FABIA_9741_001_100_0000_Light-Ophidia-super-mini-shoulder-bag.jpg',
  title: 'Ophidia Super Mini Shoulder Bag',
  description: 'A selection of bags, including mini cross-body bags, briefcases and totes have been reshaped with functional details.',
  price: 1490,
};
const lvEarrings: Item = {
  imageLink: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cuban-chain-earrings-yellow-gold-and-diamonds--Q06949_PM2_Front%20view.png?wid=1440&hei=1440',
  title: 'Cuban Chain Earrings, Yellow Gold and Diamonds',
  description: 'Part of the season’s Cuban Chain fine jewelry collection, these hoop earrings are fashioned from 18-karat yellow gold, inset with sparkling white diamonds.',
  price: 6900,
};
const nikeSunglasses: Item = {
  imageLink: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b8dd47b-b9b2-47d7-b37a-125d6d3e821c/windtrack-road-tint-sunglasses-xckF3x.png',
  title: 'Nike Windtrack',
  description: 'Road Tint Sunglasses',
  price: 179,
};
const pradaNecklace: Item = {
  imageLink: 'https://www.prada.com/content/dam/pradabkg_products/1/1JC/1JCA73/2FATF020I/1JCA73_2FAT_F020I_SLD.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg',
  title: 'Eternal Gold Pendant Necklace',
  description: 'white gold and laboratory-grown diamonds',
  price: 7900,
};
const valentinoBag: Item = {
  imageLink: 'https://valentino-cdn.thron.com/delivery/public/image/valentino/9ca0a9c5-0ea7-46ea-85fa-8bf1795da9bc/ihqstx/std/2000x0/VALENTINO-GARAVANI-LOC%C3%92-SMALL-SHOULDER-BAG-IN-CALFSKIN?quality=80&size=35&format=auto',
  title: 'Valentino Garavani Locò Small Shoulder Bag',
  description: 'Valentino Garavani Locò small shoulder bag in calfskin with metallic VLogo Signature detail.',
  price: 2890,
};

interface MessageProps {
  message: string;
};

const Message: React.FC<MessageProps> = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState<string>("");
  const [cartItems, setCartItems] = useState<{ [key: string]: CartItem }>({});

  const handleAddToCart = (item: Item) => {
    console.log(`Adding ${item.title} to cart...`)
    setCartItems(prevCartItems => {
      const existingCartItem = prevCartItems[item.imageLink];
      if (existingCartItem) {
        // If item is already in the cart, increment its count
        return {
          ...prevCartItems,
          [item.imageLink]: {
            item: item,
            count: existingCartItem.count + 1
          }
        };
      } else {
        // If item is not in the cart, add it with a count of 1
        return {
          ...prevCartItems,
          [item.imageLink]: {
            item: item,
            count: 1
          }
        };
      }
    });
    console.log(`Added ${item.title} to cart.`)
  }

  const handleRemoveFromCart = (item: Item) => {
    console.log(`Removing ${item.title} from cart...`)
    setCartItems(prevCartItems => {
      const existingCartItem = prevCartItems[item.imageLink];
      if (existingCartItem) {
        if (existingCartItem.count > 1) {
          // Decrement the count if it's greater than 1
          return {
            ...prevCartItems,
            [item.imageLink]: {
              item: item,
              count: existingCartItem.count - 1
            }
          };
        } else {
          // Remove the item from the cart if count is 1
          const { [item.imageLink]: _, ...rest } = prevCartItems;
          return rest;
        }
      }
      return prevCartItems;
    });
    console.log(`Removed ${item.title} from cart.`)
  }

  const handleClearCart = () => {
    console.log("Clearing cart...")
    setCartItems({});
    console.log("Cart cleared.")
  };

  useEffect(() => {
    console.log(`Shopping cart updated: ${JSON.stringify(cartItems)}`);
  }, [cartItems]);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <div className="product-display-page">
      <Header cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onClearCart={handleClearCart} />
      <section>
        <Product item={chanelHandbag} onAddToCart={handleAddToCart}/>
        <Product item={diorCologne} onAddToCart={handleAddToCart}/>
        <Product item={hermesBracelet} onAddToCart={handleAddToCart}/>
        <Product item={armaniWatch} onAddToCart={handleAddToCart}/>
        <Product item={gucciHandbag} onAddToCart={handleAddToCart}/>
        <Product item={lvEarrings} onAddToCart={handleAddToCart}/>
        <Product item={nikeSunglasses} onAddToCart={handleAddToCart}/>
        <Product item={pradaNecklace} onAddToCart={handleAddToCart}/>
        <Product item={valentinoBag} onAddToCart={handleAddToCart}/>
      </section>
    </div>
  );
}