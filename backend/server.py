#! /usr/bin/env python3.6

"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import stripe
import logging


stripe.api_key = os.environ["STRIPE_API_KEY"]

# Set the static folder based on the environment
static_folder = os.environ.get('STATIC_FOLDER', '../frontend/public')

app = Flask(
    __name__,
    static_url_path='',
    static_folder=static_folder,
)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

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
    for _, cart_item in cart_items.items():
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
            success_url=DOMAIN + '/success',
            cancel_url=DOMAIN + '/canceled',
            # automatic_tax={'enabled': True},
        )
        logging.info(f"Checkout session created: {checkout_session.url}")
        return jsonify({'url': checkout_session.url})
    except Exception as e:
        logging.error(f"Error creating checkout session: {e}")
        return jsonify(error=str(e)), 403


@app.route('/success')
def success():
    return app.send_static_file('success.html')


@app.route('/canceled')
def canceled():
    return app.send_static_file('canceled.html')


if __name__ == '__main__':
    app.run(port=PORT)
