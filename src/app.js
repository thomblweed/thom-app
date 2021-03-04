import React from 'react';

import UserProvider from './state/userProvider';
import Layout from './components/Layout';
import Router from './router';

const App = () => (
  <React.StrictMode>
    <UserProvider>
      <Layout>
        <Router />
      </Layout>
    </UserProvider>
  </React.StrictMode>
);

export default App;
