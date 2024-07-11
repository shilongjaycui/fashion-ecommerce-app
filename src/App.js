import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product"
import Header from "./components/Header"

const product1 = {
  image: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product2 = {
  image: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product3 = {
  image: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product4 = {
  image: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product5 = {
  image: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product6 = {
  image: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product7 = {
  image: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product8 = {
  image: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};
const product9 = {
  image: 'https://i5.walmartimages.com/seo/Chobani-Hero-Batch-Vanilla-Greek-Yogurt-with-Mixed-Berry-on-the-Bottom-5-3-oz-4-Count-Plastic_a354407b-800a-42c8-8a6e-b3d2da98940e.7da1e95701a53114865ab0b7210b4f14.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  title: 'Chobani Non-Fat Greek Yogurt',
  description: 'This is really good.',
  price: '3.98'
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    console.log(`Adding ${product.title} to cart...`)
    setCartItems([...cartItems, product])
    console.log(`Added ${product.title} to cart.`)
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
        <Product product={product1} onAddToCart={onAddToCart}/>
        <Product product={product2} onAddToCart={onAddToCart}/>
        <Product product={product3} onAddToCart={onAddToCart}/>
        <Product product={product4} onAddToCart={onAddToCart}/>
        <Product product={product5} onAddToCart={onAddToCart}/>
        <Product product={product6} onAddToCart={onAddToCart}/>
        <Product product={product7} onAddToCart={onAddToCart}/>
        <Product product={product8} onAddToCart={onAddToCart}/>
        <Product product={product9} onAddToCart={onAddToCart}/>
        {/* <form action="/create-checkout-session" method="POST">
          <button type="submit">
            Checkout
          </button>
        </form> */}
      </section>
    </div>
  );
}