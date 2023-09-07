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
    setID: (id: string) => set({ activeID: id }),
    setIDs: (ids: string[]) => set({ ids: ids }),
    reset: () => set({ ids: [], activeID: undefined }),
  };
}, Object.is);

export default usePlayer;
