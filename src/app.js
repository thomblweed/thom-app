import React from 'react';

import Layout from './components/Layout';
import Router from './router';

const App = () => (
  <React.StrictMode>
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>
);

export default App;
