import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { useStyles } from '../../hooks/useStyles';
import Footer from '../Footer';

interface Layout {
  children?: any;
}

const Layout: FC<Layout> = ({ children }): JSX.Element => {
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
