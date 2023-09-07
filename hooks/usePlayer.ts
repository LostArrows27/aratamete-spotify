import { createWithEqualityFn } from "zustand/traditional";

interface PlayerStore {
  ids: string[];
  activeID?: string;
  setID: (id: string) => void;
  setIDs: (ids: string[]) => void;
  reset: () => void;
}

const usePlayer = createWithEqualityFn<PlayerStore>((set) => {
  return {
    ids: [],
    activeID: undefined,
    setID: (id: string) => {
      const bodyChange = document.getElementById("bodyChange");
      bodyChange?.classList.remove("h-full");
      bodyChange?.classList.add("h-[calc(100%-80px)]");
      set({ activeID: id });
    },
    setIDs: (ids: string[]) => set({ ids: ids }),
    reset: () => {
      const bodyChange = document.getElementById("bodyChange");
      bodyChange?.classList.remove("h-[calc(100%-80px)]");
      bodyChange?.classList.add("h-full");
      set({ ids: [], activeID: undefined });
    },
  };
}, Object.is);

export default usePlayer;
