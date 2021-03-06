import React, { createContext, useMemo } from 'react';

import { useAuth } from '../hooks/useAuth';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const auth = useAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export default UserProvider;
