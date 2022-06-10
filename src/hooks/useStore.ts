import create from 'zustand';

import { User } from '../types/user.type';

type StoreState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useStore = create<StoreState>()((set) => ({
  user: null,
  setUser: (user: User | null) => set(() => ({ user }))
}));
