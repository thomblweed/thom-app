/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Context, createContext, FC } from 'react';

import { Auth, useAuth } from '../hooks/useAuth';
import { Status } from '../hooks/useAxios';
import { emptyUser } from '../interfaces/user';

export const AuthContext: Context<Auth> = createContext<Auth>({
  user: emptyUser,
  userStatus: Status.INITIAL,
  signin: () => {},
  signout: () => {}
});

const UserProvider: FC = ({ children }) => {
  const auth: Auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default UserProvider;
