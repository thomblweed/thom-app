import create from 'zustand';

import { Status } from '../enums/status.enum';
import { User } from '../types/user.type';

interface UserState {
  user: User | null;
  userStatus: Status;
  setUser: (user: User | null) => void;
}

export const useUser = create<UserState>()((set) => ({
  user: null,
  userStatus: Status.LOADING,
  setUser: (user: User | null) => set({ user })
}));
