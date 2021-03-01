import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';

import Form from '../components/Form';
import { useStyles } from '../hooks/useStyles';
import { AuthContext } from '../state/user-provider';

const Login = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    authContext.user && navigate('/');
  }, [authContext.user]);

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Form formSubmit={authContext.login} />
      </div>
    </Container>
  );
};

export default Login;
