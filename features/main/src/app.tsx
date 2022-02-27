import React from 'react';
import { ThemeProvider } from 'thom-components';

// import { AuthProvider } from './features/login/state/authProvider';
import { Layout } from './components/Layout';
import Router from './router';

const App = (): JSX.Element => (
  <React.StrictMode>
    <ThemeProvider>
      <Layout>
        {/* <AuthProvider> */}
        <Router />
        {/* </AuthProvider> */}
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);

export { App };
