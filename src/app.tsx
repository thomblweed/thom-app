import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import UserProvider from './state/authProvider';
import Layout from './components/Layout';
import Router from './router';

const App = (): JSX.Element => (
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <Layout>
          <Router />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);

export default App;
