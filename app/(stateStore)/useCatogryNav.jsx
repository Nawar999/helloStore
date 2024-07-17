import { create } from "zustand";

export const useCatogryNav = create((set) => ({
  catogry: "all",
  setToNetflex: () => set({ catogry: "netflex" }),
  setToShahid: () => set({ catogry: "shahid" }),
  setToIptv: () => set({ catogry: "iptv" }),
  setToAll: () => set({ catogry: "all" }),
  setToYoutube: () => set({ catogry: "youtube" }),
}));
