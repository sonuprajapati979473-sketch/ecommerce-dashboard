import { Link } from 'react-router-dom';
import { ShoppingBag, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function PaymentCompleted() {
  return (
    <main className="container payment-container">
      <Link to="/" className="back-link"><ArrowLeft size={17} /> Back to shop</Link>
      <section className="completed-card">
        <div className="check-circle"><CheckCircle2 size={48} /></div>
        <p className="eyebrow">ORDER STATUS</p>
        <h1>Payment Completed!</h1>
        <p className="muted confirmation-copy">Thank you for shopping with ShopEase. Your demo order has been confirmed successfully.</p>
        <div className="order-status"><span>Order status</span><strong><span className="status-dot" /> Confirmed</strong></div>
        <p className="demo-note">This is a demonstration page. No actual payment was taken.</p>
        <Link to="/" className="button primary return-button"><ShoppingBag size={18} /> Continue Shopping</Link>
      </section>
    </main>
  );
}
