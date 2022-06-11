import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router';
import type { SubmitHandler } from 'react-hook-form';
import { Container } from 'thom-components';

import { Form } from '../components/Form';
import type { Credentials } from '../types/credentials.type';
import { loginSchema } from '../schema/loginSchema';
import { useAuth } from '../hooks/useAuth';

const Login = (): JSX.Element => {
  const { user, signin, busy } = useAuth();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    user && navigate('/');
  }, [user, navigate]);

  return (
    <Container data-testid='login-container' size='small'>
      <Form<Credentials>
        testId='login-form'
        formSubmit={signin as SubmitHandler<Credentials>}
        formSubmitting={busy}
        schema={loginSchema}
      />
    </Container>
  );
};

export default Login;
