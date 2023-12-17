import { create } from "zustand";

interface HomeState {
  theme: string
  setTheme: (newTheme: string) => void
}

const useHomeStore = create<HomeState>((set) => ({
  theme: "name",
  setTheme: (newTheme: string) =>
    set({
      theme: newTheme,
    }),
}));

export default useHomeStore;
