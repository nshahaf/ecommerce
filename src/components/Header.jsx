import useCartStore from "../../stores/cart-store";
import IconCart from "../assets/icons/icon-cart.svg?react";
import Logo from "../assets/icons/logo.svg?react";
import CartModal from "./CartModal";
import { useState } from "react";

export default function Header() {
  const { isCartOpen, toggleIsCartOpen, cart } = useCartStore();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header>
      <nav>
        <button className="mobile-nav-btn" onClick={() => setMobileNav(!mobileNav)}>
          |||
        </button>
        <Logo className="logo" />
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className={`mobile-nav ${mobileNav? 'open' : ''}`}>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="cart flex align-center">
        <IconCart className="icon" onClick={toggleIsCartOpen} />
        <div className="img-container"></div>
        {cart.length > 0 && !isCartOpen && (
          <div className="cart-item-indicator">{cart.length}</div>
        )}
      </div>
      {isCartOpen && <CartModal />}
    </header>
  );
}
