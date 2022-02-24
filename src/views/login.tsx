import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router';
import { Container } from 'thom-components';

import { Form } from '../components/Form';
import { AuthContext } from '../state/authProvider';
import { Status } from '../hooks/useAxios';
import { Credentials } from '../interfaces/credentials';
import { loginSchema } from '../schema/loginSchema';
import { Auth } from '../hooks/useAuth';

const Login = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const { user, userStatus, signin }: Auth = useContext<Auth>(AuthContext);

  useEffect(() => {
    user && navigate('/');
  }, [user, navigate]);

  return (
    <Container data-testid='login-container' size='small'>
      <Form<Credentials>
        testId='login-form'
        formSubmit={signin}
        formSubmitting={userStatus === Status.LOADING}
        schema={loginSchema}
      />
    </Container>
  );
};

export default Login;
