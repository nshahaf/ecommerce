
export default function ProductInfo() {
  return (
    <div className="product-info">
      <h2>Sneakers company</h2>
      <h1>Fall limited edition sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <h3 className="price">$125.00 <span>50%</span></h3>
      <h4 className="discount">$250.00</h4>
      <div className="counter">
        <button className="decrease">-</button>
        <input type="number" value="1" />
        <button className="increase">+</button>
      </div>
      <button className="add to cart"><i>cart</i> Add to cart</button>
    </div>
  )
}
