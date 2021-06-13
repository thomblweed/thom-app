import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router';
import { Container } from '@chakra-ui/react';

import Form from '../components/Form/Form';
import { AuthContext } from '../state/authProvider';
import { Status } from '../hooks/useAxios';
import { Credentials } from '../interfaces/credentials';
import { loginSchema } from '../schema/loginSchema';
import { Auth } from '../hooks/useAuth';

const Login = () => {
  const navigate: NavigateFunction = useNavigate();
  const { user, userStatus, login }: Auth = useContext<Auth>(AuthContext);

  useEffect(() => {
    user.id.length > 0 && navigate('/');
  }, [user.id]);

  return (
    <Container data-testid='login-container'>
      <Form<Credentials>
        testId='login-form'
        formSubmit={login}
        formSubmitting={userStatus === Status.LOADING}
        schema={loginSchema}
      />
    </Container>
  );
};

export default Login;
