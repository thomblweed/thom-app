/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Context, createContext, FC, ReactNode } from 'react';

import { Status } from '../../src/enums/status.enum';
import { Auth, useAuth } from '../../src/hooks/useAuth';

export const AuthContext: Context<Auth> = createContext<Auth>({
  user: null,
  userStatus: Status.LOADING,
  signin: () => {},
  signout: () => {},
  getUser: () => {}
});

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const auth: Auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
