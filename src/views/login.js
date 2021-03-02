import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';

import Form from '../components/Form';
import { useStyles } from '../hooks/useStyles';
import { UserContext } from '../state/user-provider';

const Login = () => {
  const classes = useStyles();
  const { login, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/');
  }, [user]);

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Form formSubmit={login} />
      </div>
    </Container>
  );
};

export default Login;
