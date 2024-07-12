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
- [x] backend: Python, Stripe SDK's APIs
  - [x] Stripe Checkout: redirect customers to a Stripe-hosted payment page
- [x] frontend: HTML, CSS, React with TypeScript
- [x] CI/CD: GitHub Actions
  - [x] linting
  - [x] testing: pytest
- [ ] deployment: AWS Cloud Development Kit
- [x] containerization: Docker
- [ ] monitoring: Datadog

## Running the web app locally

1. Build the server
```
make build-server
```

2. Run the server
```
make run-server-locally
```

3. Build the client app
```
make build-client
```

4. Run the client app
```
make run-client-locally
```

5. Go to [http://localhost:3000/checkout](http://localhost:3000/checkout)

## Running the web app in Docker containers

1. Build and spin up both the backend container and the frontend container
```
docker-compose up --build
```

2. Go to [http://localhost:3000/checkout](http://localhost:3000/checkout)
3. Tear down the containers after use
```
docker-compose down
```

## Next steps
- Create the `Product` prop instances from a database instead of hard-coding them
- Use [Tailwind CSS](https://tailwindcss.com/) so we can eliminate all the `.css` files
- Make the web app compatible with tablets and smartphones
- Decide to have the `ShoppingCart.tsx` component be a child component of whether the `App.tsx` component or the `Header.tsx` component. Not sure which approach improves debuggability at the moment
- Test the React components, props, and states by writing unit tests using the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Right now the `STRIPE_API_KEY` secret is baked into `docker build`. Is that safe? If not, what's the safe way to pass in the secret?