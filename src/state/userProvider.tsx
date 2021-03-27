import React, { Context, createContext } from 'react';

import { useAuth } from '../hooks/useAuth';
import { User } from '../types/user';

export const UserContext: Context<User> = createContext({
  id: '',
  email: ''
});

const UserProvider = ({ children }) => {
  const auth = useAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export default UserProvider;
