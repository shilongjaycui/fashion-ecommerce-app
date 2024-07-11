#! /usr/bin/env python3.6

"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""
import os
from flask import Flask, redirect, request, jsonify
from flask_cors import CORS
import stripe
import logging


stripe.api_key = os.environ["STRIPE_API_KEY"]

app = Flask(
    __name__,
    static_url_path='',
    static_folder='public',
)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow requests from localhost:3000

PORT = "4242"
DOMAIN = f'http://localhost:{PORT}'

logging.basicConfig(level=logging.INFO)

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    logging.info("Received request")
    data = request.get_json()
    logging.info(f"Request data: {data}")
    cart_items = data['cartItems']
    
    line_items = []
    for item_key, cart_item in cart_items.items():
        item = cart_item['item']
        count = cart_item['count']
        line_items.append({
            'price_data': {
                'currency': 'usd',
                'product_data': {
                    'name': item['title'],
                },
                'unit_amount': int(item['price'] * 100),  # Stripe uses cents
            },
            'quantity': count,
        })

    try:
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=line_items,
            mode='payment',
            success_url=DOMAIN + '?success=true',
            cancel_url=DOMAIN + '?canceled=true',
            # automatic_tax={'enabled': True},
        )
        logging.info(f"Checkout session created: {checkout_session.url}")
        return jsonify({'url': checkout_session.url})
    except Exception as e:
        logging.error(f"Error creating checkout session: {e}")
        return jsonify(error=str(e)), 403


if __name__ == '__main__':
    app.run(port=PORT)
