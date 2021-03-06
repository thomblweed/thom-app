import React, { useContext, useEffect, memo } from 'react';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';

import Form from '../components/Form';
import { useStyles } from '../hooks/useStyles';
import { UserContext } from '../state/userProvider';
import { LOADING } from '../hooks/useAxios';

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user, userStatus, login } = useContext(UserContext);

  useEffect(() => {
    user && navigate('/');
  }, [user]);

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Form formSubmit={login} formSubmitting={userStatus === LOADING} />
      </div>
    </Container>
  );
};

export default Login;
