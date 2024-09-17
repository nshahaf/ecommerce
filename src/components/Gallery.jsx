export default function Gallery() {
  return (
    <div className="gallery">
      <div className="main-img">
        <img src="/src/assets/images/image-product-1.jpg" alt="" />
      </div>

      <div className="sub-img-container">
        <div className="sub-img">
          <img src="/src/assets/images/image-product-1-thumbnail.jpg" alt="" />
        </div>
        <div className="sub-img">
          <img src="/src/assets/images/image-product-2-thumbnail.jpg" alt="" />
        </div>
        <div className="sub-img">
          <img src="/src/assets/images/image-product-3-thumbnail.jpg" alt="" />
        </div>
        <div className="sub-img">
          <img src="/src/assets/images/image-product-4-thumbnail.jpg" alt="" />
        </div>
      
        
      </div>
    </div>
  );
}
