import React, { Context, createContext, FC } from 'react';

import { Auth, useAuth } from '../hooks/useAuth';
import { Status } from '../hooks/useAxios';
import { Credentials } from '../interfaces/credentials';
import { emptyUser } from '../interfaces/user';

export const AuthContext: Context<Auth> = createContext<Auth>({
  user: emptyUser,
  userStatus: Status.INITIAL,
  signin: (data: Credentials) => {},
  signout: () => {}
});

const UserProvider: FC = ({ children }) => {
  const auth: Auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default UserProvider;
