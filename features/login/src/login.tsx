import React, { useContext } from 'react';
import { Container } from 'thom-components';

import { Form } from './components/Form';
import { AuthContext } from './state/authProvider';
import { Auth } from './hooks/useAuth';
import { Credentials } from './interfaces/credentials';
import { loginSchema } from './schema/loginSchema';
import { Status } from './enums/status.enum';

const Login = (): JSX.Element => {
  const { userStatus, signin }: Auth = useContext<Auth>(AuthContext);

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
