import React, { createContext } from 'react';

import { useAuth } from '../hooks/useAuth';

export const UserContext = createContext({
  user: null,
  login: () => {},
  logout: () => {}
});

const UserProvider = ({ children }) => {
  const auth = useAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export default UserProvider;
