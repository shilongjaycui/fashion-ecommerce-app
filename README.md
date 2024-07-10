# `stripe-demo-app`
A basic web app for **Cozy Threads**, a fictional direct-to-consumer e-commerce brand that sells high-quality, ethically-sourced apparel and accessories.

## Why (purpose)
To showcase Stripe payments' capabilities

## What (requirements)
- **Product Catalog:** a list of Cozy Threads' products, including an image, title, description, and price for each item
- **Shopping Cart:** where customers can add products to a shopping cart and view the items they've selected
- **Checkout:** a checkout flow that uses Stripe to securely collect payment information and complete the transaction. Display the result to the customer.
- **Write-Up:** a less-than-700-word write-up that covers
  - the overall architecture and design of this application
  - key decisions made in the implementation, including any trade offs or areas that could be improved upon with more time
  - any additional features or functionality that could be added to the application given more time

## How (implementation)
- [x] version control: Git, GitHub
- [ ] backend: Python, Stripe SDK's APIs
  - [ ] Stripe Checkout: redirect customers to a Stripe-hosted payment page
- [ ] frontend: HTML, TailwindCSS, React with TypeScript
- [ ] CI/CD: GitHub Actions
  - [ ] linting
  - [ ] testing: pytest, React Testing Library
- [ ] deployment: AWS Cloud Development Kit
- [ ] containerization: Docker
- [ ] monitoring: Datadog

## Running the web app locally

1. Build the server
```
make build-server
```

2. Run the server
```
make run-server
```

3. Build the client app
```
make build-client
```

4. Run the client app
```
make run-client
```

5. Go to [http://localhost:3000/checkout](http://localhost:3000/checkout)

## Next steps
- Create the `Product` prop instances from a database instead of hard-coding them
- Use [Tailwind CSS](https://tailwindcss.com/) so we can eliminate all the `.css` files
- Make the web app compatible with tablets and smartphones
- Convert the web app from JavaScript to TypeScript to save debugging time