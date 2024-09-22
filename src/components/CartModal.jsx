import useCartStore from "../../stores/cart-store";
import DeleteIcon from "../assets/icons/icon-delete.svg?react"

export default function CartModal() {
  const { cart, removeItem, clearCart} = useCartStore();
  
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="line"></div>

      {cart.length === 0 && <p className="empty">Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="item-container">
          <img src={item.image} alt="" />
          <div className="item-info">
            <h3>{item.title}</h3>
            <p>
              <span className="price">
                ${item.price} x {item.quantity}
              </span>
              <span className="total"> ${item.total.toFixed(2)}</span>
            </p>
            
          </div>
          <DeleteIcon className="delete-icon" onClick={() => removeItem(item.id)}/>
        </div>
      ))}
      <button disabled={!cart.length} onClick={clearCart}>Checkout</button>
    </div>
  );
}
