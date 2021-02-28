import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useStyles } from '../src/hooks/useStyles';
import Footer from './components/Footer';
import Main from './views/main';

const App = () => {
  const classes = useStyles();
  return (
    <React.StrictMode>
      <div className={classes.root}>
        <CssBaseline />
        <Main />
        <Footer />
      </div>
    </React.StrictMode>
  );
};

export default App;
