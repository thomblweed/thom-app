import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, ContentLoading } from 'thom-components';

import { Status } from '../hooks/useAxios';
import { AuthContext } from '../state/authProvider';

const Main = (): JSX.Element => {
  const { user, userStatus, signout } = useContext(AuthContext);
  const loading = userStatus === Status.LOADING;
  const authenticated = user.id;

  return (
    <Container data-testid='main-view' size='large'>
      {loading ? (
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

export default Main;
