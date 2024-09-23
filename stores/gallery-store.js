import { create } from 'zustand';

const useGalleryStore = create((set) => ({ 
  images: [
    {
      thumbnail: `${import.meta.env.BASE_URL}assets/images/image-product-1-thumbnail.jpg`,
      full: `${import.meta.env.BASE_URL}assets/images/image-product-1.jpg`,
    },
    {
      thumbnail: `${import.meta.env.BASE_URL}assets/images/image-product-2-thumbnail.jpg`,
      full: `${import.meta.env.BASE_URL}assets/images/image-product-2.jpg`,
    },
    {
      thumbnail: `${import.meta.env.BASE_URL}assets/images/image-product-3-thumbnail.jpg`,
      full: `${import.meta.env.BASE_URL}assets/images/image-product-3.jpg`,
    },
    {
      thumbnail: `${import.meta.env.BASE_URL}assets/images/image-product-4-thumbnail.jpg`,
      full: `${import.meta.env.BASE_URL}assets/images/image-product-4.jpg`,
    },
  ],
  // State for active image index and URL
  activeIndex: 0, // Default index
  activeImgUrl: `${import.meta.env.BASE_URL}assets/images/image-product-1.jpg`, // Default image
  
  // Function to update active index and image URL
  setActiveIndex: (newIndex) => set((state) => {
    return {
      activeIndex: newIndex,
      activeImgUrl: state.images[newIndex].full,
    };
  }),

  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}));

export default useGalleryStore;