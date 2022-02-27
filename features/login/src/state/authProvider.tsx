/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Context, createContext, FC } from 'react';
import { Status } from '../enums/status.enum';

import { Auth, useAuth } from '../hooks/useAuth';

export const AuthContext: Context<Auth> = createContext<Auth>({
  user: null,
  userStatus: Status.LOADING,
  signin: () => {},
  signout: () => {},
  getUser: () => {}
});

const AuthProvider: FC = ({ children }) => {
  const auth: Auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
