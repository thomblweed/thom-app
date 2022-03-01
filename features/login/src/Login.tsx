import React, { FC, useContext, useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Container } from 'thom-components';

import { Form } from './components/Form';
import { AuthContext } from './state/authProvider';
import { Auth } from './hooks/useAuth';
import { Credentials } from './interfaces/credentials';
import { loginSchema } from './schema/loginSchema';
import { Status } from './enums/status.enum';

import type { LoginFeature } from 'shared';

const Login: LoginFeature = (): JSX.Element => {
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

export { Login };
