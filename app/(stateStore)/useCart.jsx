import { create } from "zustand";

export const useCart = create((set) => ({
  counter: 0,
  inc: () => set((state) => ({ counter: state.counter + 1 })),
  dis: () => set((state) => ({ counter: state.counter - 1 })),
}));
