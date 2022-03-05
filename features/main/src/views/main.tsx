import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, ContentLoading } from 'thom-components';

import { Status } from 'shared';
import { AuthContext } from 'login/AuthContext';

const Main = (): JSX.Element => {
  const { user, userStatus, signout } = useContext(AuthContext);
  const authenticating = userStatus === Status.LOADING;
  const authenticated = user;

  return (
    <Container data-testid='main-view' size='large'>
      {authenticating ? (
        <ContentLoading
          loadingSchema={[
            {
              lines: [
                { width: '25%', id: 'line1' },
                { width: '25%', id: 'line2' }
              ],
              buttons: [{ id: 'button1' }]
            }
          ]}
        />
      ) : (
        <>
          <h1>thom app</h1>
          <p>Welcome {authenticated ? user.email : 'Guest'}</p>
          {authenticated ? (
            <Button label='Logout' onClick={() => signout()} />
          ) : (
            <Link to={'/login'}>Sign In</Link>
          )}
        </>
      )}
    </Container>
  );
};

export { Main };
