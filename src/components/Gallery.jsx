import { useState } from "react";
import IconClose from "../assets/icons/icon-close.svg?react";
import IconNext from "../assets/icons/icon-next.svg?react";
import IconPrev from "../assets/icons/icon-previous.svg?react";

import useGalleryStore from '../../stores/store.js'; 

export default function Gallery({ setIsModalOpen, controls=false }) {
  const {images, activeImgUrl, activeIndex, setActiveImg } = useGalleryStore();

  const handleClick = (image, index) => {
    setActiveImg(image, index);
  };

  const handleModal = (event, isOpen) => {
    event.stopPropagation();
    setIsModalOpen(isOpen);
  };

  return (
    <div className="gallery">
      <div className="main-img" onClick={(e) => handleModal(e, true)}>
        <img src={activeImgUrl} alt="main img" />
        {controls && (
          <>
            <div className="close-btn" onClick={(e) => handleModal(e, false)}>
              <IconClose />
            </div>
            <div className="next-btn">
              <IconNext />
            </div>
            <div className="prev-btn">
              <IconPrev />
            </div>
          </>
        )}
      </div>

      <div className="sub-img-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`sub-img ${activeIndex === index ? "selected" : ""}`}
            onClick={() => handleClick(image.full,index)}
          >
            <img src={image.thumbnail} alt={`Sub image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
