import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ShopPage from './pages/ShopPage.jsx';
import PaymentCompleted from './pages/PaymentCompleted.jsx';

export default function App() {
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // Load product from the backend API
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((products) => setProduct(products[0]))
      .catch(() => setProduct(null));
  }, []);

  function addToCart() {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(id, change) {
    setCart((current) => current
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0));
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-shell">
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<ShopPage product={product} cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
        <Route path="/payment-completed" element={<PaymentCompleted />} />
        <Route path="*" element={<main className="container not-found"><h1>Page not found</h1><Link to="/" className="button primary">Return to shop</Link></main>} />
      </Routes>
      <Footer />
    </div>
  );
}
