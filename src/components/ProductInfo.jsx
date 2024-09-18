import Minus from "../assets/icons/icon-minus.svg?react";
import Plus from "../assets/icons/icon-plus.svg?react";
import Cart from "../assets/icons/icon-cart.svg?react";
export default function ProductInfo() {
  return (
    <div className="product-info">
      <h2>Sneakers company</h2>
      <h1>Fall limited edition sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <h3 className="price">
        $125.00 <span>50%</span>
      </h3>
      <h4 className="discount">$250.00</h4>
      <div className="counter-container">
        <div className="counter">
          <button className="decrease"><Minus/></button>
          <input type="number" value="0" />
          <button className="increase"><Plus/></button>
        </div>
        <button className="add-to-cart">
          <i><Cart/></i> Add to cart
        </button>
      </div>
    </div>
  );
}
