import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router';
import { useMutation, useQuery } from 'react-query';
import type { SubmitHandler } from 'react-hook-form';
import { Container } from 'thom-components';

import { Form } from '../components/Form';
import type { Credentials } from '../types/credentials.type';
import type { User } from '../types/user.type';
import { loginSchema } from '../schema/loginSchema';
import { axiosService } from '../service/axios.service';

const Login = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  useQuery<void>('user', async () => {
    await axiosService<User>('/api/users/currentuser');
    navigate('/');
  });
  const { isLoading, mutate: signin } = useMutation(
    async (data: Credentials) => {
      await axiosService<Credentials>('/api/users/signin', 'POST', data);
      navigate('/');
    }
  );

  return (
    <Container data-testid='login-container' size='small'>
      <Form<Credentials>
        testId='login-form'
        formSubmit={signin as SubmitHandler<Credentials>}
        formSubmitting={isLoading}
        schema={loginSchema}
      />
    </Container>
  );
};

export default Login;
