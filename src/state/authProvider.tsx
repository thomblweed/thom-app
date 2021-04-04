import React, { Context, createContext, FC } from 'react';

import { Auth, useAuth } from '../hooks/useAuth';
import { Status } from '../hooks/useAxios';
import { Credentials } from '../types/credentials';
import { emptyUser } from '../types/user';

export const AuthContext: Context<Auth> = createContext<Auth>({
  user: emptyUser,
  userStatus: Status.INITIAL,
  login: (data: Credentials) => {},
  logout: () => {}
});

const UserProvider: FC = ({ children }) => {
  const auth: Auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default UserProvider;
