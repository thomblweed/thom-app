import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { Button, Container, ContentLoading } from 'thom-components';

import { getCurrentUser, signoutUser } from '../service/user.service';
import { User } from '../types/user.type';

const Main = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { data: user, isFetching: loadingUser } = useQuery<User>(
    'user',
    getCurrentUser
  );
  const { mutate: signout, isLoading: loggingOut } = useMutation(signoutUser, {
    onSuccess: () => {
      queryClient.setQueryData('user', null);
    }
  });

  return (
    <Container data-testid='main-view' size='large'>
      <h1>thom app</h1>
      {loadingUser || loggingOut ? (
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
