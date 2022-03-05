/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Auth, useAuth } from '../hooks/useAuth';
import { AuthContext } from './AuthContext';
import { AuthProviderState } from 'shared';

const AuthProvider: AuthProviderState = ({ children }) => {
  const auth: Auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
