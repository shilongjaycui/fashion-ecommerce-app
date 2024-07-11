import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product"
import Header from "./components/Header"

export interface Item {
  imageLink: string;
  title: string;
  description: string;
  price: string;
}

const chanelHandbag: Item = {
  imageLink: 'https://www.chanel.com/images//t_one///q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1240/mini-classic-handbag-pink-fuchsia-purple-wool-cotton-mixed-fibers-gold-tone-metal-wool-cotton-mixed-fibers-gold-tone-metal-packshot-artistique-vue1-a69900b17528ny718-9542488915998.jpg',
  title: 'MINI CLASSIC HANDBAG',
  description: 'Wool, Cotton, Mixed Fibers & Gold-Tone Metal Pink, Fuchsia & Purple',
  price: '$5,200'
};
const product2: Item = {
  imageLink: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product3: Item = {
  imageLink: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product4: Item = {
  imageLink: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product5: Item = {
  imageLink: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product6: Item = {
  imageLink: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product7: Item = {
  imageLink: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product8: Item = {
  imageLink: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product9: Item = {
  imageLink: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
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
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const handleAddToCart = (item: Item) => {
    console.log(`Adding ${item.title} to cart...`)
    setCartItems([...cartItems, item])
    console.log(`Added ${item.title} to cart.`)
  }

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
      <Header cartItems={cartItems}/>
      <section>
        <Product item={chanelHandbag} onAddToCart={handleAddToCart}/>
        <Product item={product2} onAddToCart={handleAddToCart}/>
        <Product item={product3} onAddToCart={handleAddToCart}/>
        <Product item={product4} onAddToCart={handleAddToCart}/>
        <Product item={product5} onAddToCart={handleAddToCart}/>
        <Product item={product6} onAddToCart={handleAddToCart}/>
        <Product item={product7} onAddToCart={handleAddToCart}/>
        <Product item={product8} onAddToCart={handleAddToCart}/>
        <Product item={product9} onAddToCart={handleAddToCart}/>
        {/* <form action="/create-checkout-session" method="POST">
          <button type="submit">
            Checkout
          </button>
        </form> */}
      </section>
    </div>
  );
}