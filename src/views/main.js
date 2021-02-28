import React from 'react';
import Container from '@material-ui/core/Container';

import Form from '../components/Form';
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
      <Form />
    </Container>
  );
};

export default Main;
