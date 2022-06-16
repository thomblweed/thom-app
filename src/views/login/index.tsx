import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'thom-components';

import { Form } from '~/components/Form';
import { useAuth } from '~/hooks/useAuth';
import type { Credentials } from '~/types/credentials.type';
import { loginSchema } from '~/schema/loginSchema';

export const Login = (): JSX.Element => {
  const { signinAsync, busy } = useAuth();
  const navigate = useNavigate();

  const login = useCallback(
    async (formData: Credentials): Promise<void> => {
      await signinAsync(formData);
      navigate('/');
    },
    [signinAsync, navigate]
  );

  return (
    <Container data-testid='login-container' size='small'>
      <Form<Credentials>
        testId='login-form'
        formSubmit={login}
        formSubmitting={busy}
        schema={loginSchema}
      />
    </Container>
  );
};
