import { create } from 'zustand';

const useGalleryStore = create((set) => ({
  images: [
    {
      thumbnail: '/src/assets/images/image-product-1-thumbnail.jpg',
      full: '/src/assets/images/image-product-1.jpg',
    },
    {
      thumbnail: '/src/assets/images/image-product-2-thumbnail.jpg',
      full: '/src/assets/images/image-product-2.jpg',
    },
    {
      thumbnail: '/src/assets/images/image-product-3-thumbnail.jpg',
      full: '/src/assets/images/image-product-3.jpg',
    },
    {
      thumbnail: '/src/assets/images/image-product-4-thumbnail.jpg',
      full: '/src/assets/images/image-product-4.jpg',
    },
  ],
  activeImgUrl: '/src/assets/images/image-product-1.jpg', // Default image
  activeIndex: 0, // Default index
  setActiveImg: (image, index) => set({ activeImgUrl: image, activeIndex: index }),
}));

export default useGalleryStore;