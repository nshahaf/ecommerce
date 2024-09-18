import IconCart from "../assets/icons/icon-cart.svg?react";
import Logo from "../assets/icons/logo.svg?react";

export default function Header() {
  return (
    <header>
      <nav className="flex align-center">
        <Logo className="logo"/>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="cart flex align-center">
        <IconCart className="icon" />
        <div className="img-container"></div>
      </div>
    </header>
  );
}
