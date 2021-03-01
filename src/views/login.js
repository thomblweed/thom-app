import React from 'react';
import Container from '@material-ui/core/Container';

import Form from '../components/Form';
import { useStyles } from '../hooks/useStyles';

const Login = () => {
  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Form />
      </div>
    </Container>
  );
};

export default Login;
