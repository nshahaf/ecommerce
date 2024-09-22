/* eslint-disable react/prop-types */
import Minus from "../assets/icons/icon-minus.svg?react";
import Plus from "../assets/icons/icon-plus.svg?react";
import Cart from "../assets/icons/icon-cart.svg?react";

import { useState } from "react";

import useCartStore from "../../stores/cart-store";
import useGalleryStore from "../../stores/gallery-store";

export default function ProductInfo({product}) {
  const [itemQty,setItemQty] = useState(0);
  const addItem = useCartStore((store) => store.addItem);
  const {activeIndex, images} = useGalleryStore();
  
  const title =  product?.title? product.title : 'Fall limited edition sneakers'
  const price = product?.price? product.price : '125.00'
  const description = product?.description? product.description : "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything theweather can offer."

  const handleQtyChange= (diff) => {
    if (itemQty <= 0 && diff < 0) {
      return setItemQty(0);
      
    }
    setItemQty((prev) => prev + diff);
    
  }

  const handleAdd = () => {
    if (itemQty <= 0) {
      return;
    }
    const item = {
      id: Math.random().toString(36).substring(2, 9), 
      title,
      price,
      image: images[activeIndex].thumbnail, 
      quantity: itemQty,
      total: itemQty * +price,
    }
    addItem(item);
  }
  
  return (
    <div className="product-info">
      <h2>Sneakers company</h2>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
      <h3 className="price">${price}<span>50%</span>
      </h3>
      <h4 className="discount">$250.00</h4>
      <div className="counter-container">
        <div className="counter">
          <button className="decrease" onClick={() => handleQtyChange(-1)}>
            <Minus />
          </button>
          <input type="number" value={itemQty} />
          <button className="increase" onClick={() => handleQtyChange(+1)}>
            <Plus />
          </button>
        </div>
        <button className="add-to-cart" onClick={handleAdd} disabled={!itemQty}>
          <i>
            <Cart />
          </i>{" "}
          Add to cart
        </button>
      </div>
    </div>
  );
}
