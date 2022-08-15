import React, { lazy, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { FormType } from '~/components/Form';
const Form = lazy(() =>
  import('~/components/Form').then(({ Form }) => ({ default: Form }))
) as FormType;
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
    <div className='flex h-full' data-testid='login-container'>
      <Form<Credentials>
        testId='login-form'
        formSubmit={login}
        formSubmitting={busy}
        schema={loginSchema}
      />
    </div>
  );
};
