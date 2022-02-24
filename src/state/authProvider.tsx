/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Context, createContext, FC } from 'react';

import { Auth, useAuth } from '../hooks/useAuth';
import { Status } from '../hooks/useAxios';

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

export default AuthProvider;
