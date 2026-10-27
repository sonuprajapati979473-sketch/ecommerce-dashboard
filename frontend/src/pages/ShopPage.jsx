import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, CreditCard, Plus, Minus, Trash2 } from 'lucide-react';

export default function ShopPage({ product, cart, addToCart, updateQuantity, removeFromCart }) {
  const navigate = useNavigate();
  if (!product) return <main className="container"><p className="muted">Loading products…</p></main>;
  const quantity = cart.find((item) => item.id === product.id)?.quantity ?? 0;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function checkout() {
    if (cart.length === 0) return;
    navigate('/payment-completed');
  }

  return (
    <main className="container">
      <section className="welcome">
        <div>
          <p className="eyebrow">YOUR EVERYDAY STORE</p>
          <h1>Find your next favorite.</h1>
          <p className="muted">A simple shopping experience, from product to checkout.</p>
        </div>
        <div className="welcome-icon"><ShoppingBag size={28} /></div>
      </section>

      <div className="section-heading">
        <div><p className="eyebrow">FEATURED</p><h2>Popular product</h2></div>
        <span className="muted">1 item available</span>
      </div>

      <section className="product-card">
        <div className="product-image-wrap">
          <img className="product-image" src={product.image} alt={product.name} />
          <span className="image-tag">Bestseller</span>
        </div>
        <div className="product-info">
          <span className="category">AUDIO & ACCESSORIES</span>
          <h2>{product.name}</h2>
          <p className="muted product-description">{product.description}</p>
          <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="stock"><span /> In stock · Ready to ship</p>
          <button className="button primary" onClick={addToCart}>
            <ShoppingCart size={18} /> {quantity ? 'Add one more' : 'Add to Cart'}
          </button>
          {quantity > 0 && <p className="success-note">Added to cart · Quantity: {quantity}</p>}
        </div>
      </section>

      <section className="cart-section" id="cart">
        <div className="section-heading">
          <div><p className="eyebrow">YOUR ORDER</p><h2>Shopping cart <span className="inline-count">{cart.reduce((n, item) => n + item.quantity, 0)}</span></h2></div>
        </div>
        {cart.length === 0 ? (
          <div className="empty-cart"><ShoppingCart size={28} /><p>Your cart is empty.</p><span className="muted">Add a product to get started.</span></div>
        ) : (
          <div className="cart-panel">
            {cart.map((item) => (
              <div className="cart-row" key={item.id}>
                <img src={item.image} alt="" className="cart-thumb" />
                <div className="cart-item-details"><strong>{item.name}</strong><span className="muted">₹{item.price.toLocaleString('en-IN')} each</span></div>
                <div className="quantity-control">
                  <button aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                  <span>{item.quantity}</span>
                  <button aria-label="Increase quantity" onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                </div>
                <strong className="line-total">₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong>
                <button className="icon-button" aria-label="Remove product" onClick={() => removeFromCart(item.id)}><Trash2 size={17} /></button>
              </div>
            ))}
            <div className="cart-summary">
              <span className="muted">Total</span><strong className="price">₹{total.toLocaleString('en-IN')}</strong>
            </div>
            <button className="button primary checkout-button" onClick={checkout}><CreditCard size={18} /> Proceed to Payment</button>
            <p className="demo-note">Demo checkout only — no real payment will be processed.</p>
          </div>
        )}
      </section>
    </main>
  );
}
