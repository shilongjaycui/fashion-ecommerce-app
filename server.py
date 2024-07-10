#! /usr/bin/env python3.6

"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""
import os
from flask import Flask, redirect, request

import stripe
# This is your test secret API key.
stripe.api_key = 'sk_test_51PalnIRuZYjl85mcFWYSAAPK93MVkbyubSteYLiv75OXP1C5Y17b8z11ZeyCA3AX236gH5ylmmivqUWluI72YtiA00hjR9B1vl'
PRODUCT_ID = "authentic-greek-gyro"
PRICE_ID = "authentic-greek-gyro-price"
try:
    stripe.Product.create(name="Greek Gyro", id=PRODUCT_ID)
except stripe.error.InvalidRequestError:
    ...
stripe.Price.create(
    product=PRODUCT_ID,
    unit_amount=1000,
    currency="usd",
)
prices = stripe.Price.list().data
print(f"prices: {prices}")
assert len(prices) >= 1
price_id = prices[0].id

app = Flask(__name__,
            static_url_path='',
            static_folder='public')

YOUR_DOMAIN = 'http://localhost:4242'

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': price_id,
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '?success=true',
            cancel_url=YOUR_DOMAIN + '?canceled=true',
            automatic_tax={'enabled': True},
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)


if __name__ == '__main__':
    app.run(port=4242)
