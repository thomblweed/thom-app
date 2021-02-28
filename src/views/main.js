import React from 'react';
import Container from '@material-ui/core/Container';

import { useStyles } from '../hooks/useStyles';
import { usePropStyles } from '../hooks/usePropStyles';

const Main = () => {
  const classes = useStyles();
  const propStyles = usePropStyles();
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
