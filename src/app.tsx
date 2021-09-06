import React from 'react';
import { theme, ThemeProvider } from 'thom-components';

import UserProvider from './state/authProvider';
import Layout from './components/Layout';
import Router from './router';

const App = (): JSX.Element => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout>
        <UserProvider>
          <Router />
        </UserProvider>
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
