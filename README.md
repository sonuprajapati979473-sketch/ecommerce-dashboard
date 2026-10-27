# ShopEase — React E-commerce Dashboard

A simple responsive e-commerce demo built with React, Vite, React Router, and Lucide icons.

## Features
- Navbar with Home and Cart (live count)
- Product loaded from the backend API
- Product image, name, price, and Add to Cart button
- Cart quantity controls, remove item, and total calculation
- Separate `/payment-completed` route
- Responsive layout
- Demo checkout only (no real payment gateway)

## Project structure
```
ecommerce-dashboard/
├── frontend/            React + Vite app
│   └── src/
│       ├── components/  Navbar, Footer
│       ├── pages/       ShopPage, PaymentCompleted
│       ├── App.jsx      state + routes
│       └── main.jsx
└── backend/             Express API
    ├── data/products.js
    └── server.js        GET /api/products
```

## Run locally
Open two terminals.
```bash
# Terminal 1 - backend (http://localhost:5000)
cd backend && npm install && npm run dev

# Terminal 2 - frontend (http://localhost:5173)
cd frontend && npm install && npm run dev
```
The frontend proxies `/api` requests to the backend.

## Production build
```bash
cd frontend && npm run build
```

## Publish to GitHub
1. Create a new **Public** repository on GitHub named `ecommerce-dashboard`.
2. In VS Code terminal, from this project folder, run:
```bash
git init
git add .
git commit -m "Build React e-commerce dashboard"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ecommerce-dashboard.git
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to sign in, complete the browser sign-in flow.

## Interview explanation
- `useState` stores the cart.
- `addToCart`, `updateQuantity`, and `removeFromCart` update cart state.
- `BrowserRouter` and `Routes` provide navigation.
- Clicking Proceed to Payment navigates to `/payment-completed`.
- The checkout is a UI demo; it does not charge a card.
