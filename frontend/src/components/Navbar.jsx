import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount }) {
  return (
    <header className="header">
      <Link className="brand" to="/">
        <span className="brand-icon"><ShoppingBag size={21} /></span>
        <span>ShopEase</span>
      </Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/#cart" onClick={() => setTimeout(() => document.getElementById('cart')?.scrollIntoView({ behavior: 'smooth' }), 0)}>
          <ShoppingCart size={16} /> Cart <span className="cart-count">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}
