import { create } from 'zustand';

const useCartStore = create((set) => ({ 
  cart: [],
  isCartOpen: false,

  addItem: (item) => set((state) => ({cart: [...state.cart, item]})),
  removeItem: (itemId) => set((state) => ({ cart: state.cart.filter((item) => item.id!== itemId) })),
  clearCart: () => set({ cart: [] }),

  toggleIsCartOpen: () => set((state) => ({ isCartOpen: !state.isCartOpen }))
}));

export default useCartStore;