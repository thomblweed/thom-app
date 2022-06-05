import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'thom-components';

// import AuthProvider from './state/authProvider';
import { Layout } from './components/Layout';
import Router from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false
    }
  }
});

const App = (): JSX.Element => (
  <React.StrictMode>
    <ThemeProvider>
      <Layout>
        {/* <AuthProvider> */}
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
        {/* </AuthProvider> */}
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
