import { useState } from "react";

export default function Gallery() {
  const [mainImgUrl, setMainImgUrl] = useState(
    "/src/assets/images/image-product-1.jpg"
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    {
      thumbnail: "/src/assets/images/image-product-1-thumbnail.jpg",
      full: "/src/assets/images/image-product-1.jpg",
    },
    {
      thumbnail: "/src/assets/images/image-product-2-thumbnail.jpg",
      full: "/src/assets/images/image-product-2.jpg",
    },
    {
      thumbnail: "/src/assets/images/image-product-3-thumbnail.jpg",
      full: "/src/assets/images/image-product-3.jpg",
    },
    {
      thumbnail: "/src/assets/images/image-product-4-thumbnail.jpg",
      full: "/src/assets/images/image-product-4.jpg",
    },
  ];

  const handleClick = (index) => {
    setMainImgUrl(images[index].full);
    setSelectedIndex(index);
  };

  return (
    <div className="gallery">
      <div className="main-img">
        <img src={mainImgUrl} alt="main img" />
      </div>

      <div className="sub-img-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`sub-img ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          >
            <img src={image.thumbnail} alt={`Sub image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
