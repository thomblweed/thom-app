import React, { createContext } from 'react';

import { useAuth } from '../hooks/useAuth';

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {}
});

const UserProvider = ({ children }) => {
  const auth = useAuth();
  console.log('auth Provider:>> ', auth);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default UserProvider;
