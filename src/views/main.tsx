import React from 'react';
import { Button, Container, ContentLoading } from 'thom-components';

import { useAuth } from '../hooks/useAuth';

const Main = (): JSX.Element => {
  const { user, busy, signout } = useAuth();

  return (
    <Container data-testid='main-view' size='large'>
      <h1>thom app</h1>
      {busy ? (
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
          {user && <Button label='Logout' onClick={() => signout()} />}
        </>
      )}
    </Container>
  );
};

export default Main;
