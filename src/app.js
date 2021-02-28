import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Footer from './components/Footer/footer';
import Main from './views/main';

const App = () => (
  <React.StrictMode>
    <CssBaseline />
    <Main />
    <Footer />
  </React.StrictMode>
);

export default App;
