import { Context, createContext } from 'react';

import { Auth } from '../hooks/useAuth';
import { Status } from 'shared';

export const AuthContext: Context<Auth> = createContext<Auth>({
  user: null,
  userStatus: Status.LOADING,
  signin: () => {},
  signout: () => {},
  getUser: () => {}
});
