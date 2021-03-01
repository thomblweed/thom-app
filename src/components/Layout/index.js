import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { useStyles } from '../../hooks/useStyles';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component='main' className={classes.main} maxWidth='lg'>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
