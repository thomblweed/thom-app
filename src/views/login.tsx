import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router';

import Form from '../components/Form/Form';
import { useStyles } from '../hooks/useStyles';
import { AuthContext } from '../state/authProvider';
import { Status } from '../hooks/useAxios';
import { Credentials } from '../types/credentials';
import { loginSchema } from '../schema/loginSchema';
import { Auth } from '../hooks/useAuth';

const Login = () => {
  const classes = useStyles();
  const navigate: NavigateFunction = useNavigate();
  const { user, userStatus, login }: Auth = useContext<Auth>(AuthContext);

  useEffect(() => {
    user.id.length > 0 && navigate('/');
  }, [user.id]);

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Form<Credentials>
          formSubmit={login}
          formSubmitting={userStatus === Status.LOADING}
          schema={loginSchema}
        />
      </div>
    </Container>
  );
};

export default Login;
