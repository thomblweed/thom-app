import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Button, Container, ContentLoading } from 'thom-components';

import { axiosService } from '../service/axios.service';
import { User } from '../types/user.type';

const Main = (): JSX.Element => {
  const { data: user, isLoading } = useQuery<User>(
    'user',
    async () => (await axiosService<User>('/api/users/currentuser')).data
  );
  const { mutate: signout } = useMutation(async () => {
    await axiosService<undefined>('/api/users/signout', 'POST');
  });
  console.log('user', user);

  return (
    <Container data-testid='main-view' size='large'>
      <h1>thom app</h1>
      {isLoading ? (
        <ContentLoading
          loadingSchema={[
            {
              lines: [{ width: '25%', id: 'line2' }],
              buttons: [{ id: 'button1' }]
            }
          ]}
        />
      ) : (
        <>
          <p>Welcome {user ? user.email : 'Guest'}</p>
          {user ? (
            <Button label='Logout' onClick={() => signout()} />
          ) : (
            <Link to={'/login'}>Sign In</Link>
          )}
        </>
      )}
    </Container>
  );
};

export default Main;
