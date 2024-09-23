import { useState } from "react";
import IconClose from "../assets/icons/icon-close.svg?react";
import IconNext from "../assets/icons/icon-next.svg?react";
import IconPrev from "../assets/icons/icon-previous.svg?react";

import useGalleryStore from '../../stores/gallery-store.js'; 

export default function Gallery({controls=true}) {
  const {images, activeImgUrl, activeIndex, setActiveIndex} = useGalleryStore();
  const setIsModalOpen = useGalleryStore(state => state.setIsModalOpen)

  const handleClick = (event, index) => {
    event.stopPropagation();
    if(index > images.length - 1 || index < 0) return // value guard
    setActiveIndex(index);
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
            <div className="next-btn" onClick={(e) => handleClick(e, activeIndex + 1)}>
              <IconNext />
            </div>
            <div className="prev-btn" onClick={(e) => handleClick(e, activeIndex - 1)}>
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
            onClick={(e) => handleClick(e,index)}
          >
            <img src={image.thumbnail} alt={`Sub image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
