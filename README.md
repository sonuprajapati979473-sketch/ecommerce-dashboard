# ShopEase React E-commerce Dashboard

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


