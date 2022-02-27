import React from 'react';
import { ThemeProvider } from 'thom-components';

import { Login } from './login';
import { AuthProvider } from './state/authProvider';

const App = (): JSX.Element => (
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

export { App };
