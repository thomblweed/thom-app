import React from 'react';
import Container from '@material-ui/core/Container';

import { useStyles } from '../hooks/useStyles';
import { propStyles } from '../props';

const Main = () => {
  const classes = useStyles();
  return (
    <Container
      component='main'
      className={classes.main}
      maxWidth={propStyles.container.maxWidth}
    >
      <h1>thom app</h1>
    </Container>
  );
};

export default Main;
