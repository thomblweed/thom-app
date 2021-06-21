import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme, ThemeProvider } from 'thom-components';

import UserProvider from './state/authProvider';
import Layout from './components/Layout';
import Router from './router';

const App = (): JSX.Element => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <UserProvider>
          <Layout>
            <Router />
          </Layout>
        </UserProvider>
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
