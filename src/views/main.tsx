import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Loading } from 'thom-components';
import { Status } from '../hooks/useAxios';

import { AuthContext } from '../state/authProvider';

const Main = (): JSX.Element => {
  const { user, userStatus, signout, getUser } = useContext(AuthContext);
  const isLoading =
    userStatus === Status.LOADING || userStatus === Status.INITIAL;
  const authenticated = user.id;

  useEffect(() => {
    getUser();
  }, [getUser]);

  return isLoading ? (
    <Loading />
  ) : (
    <Container data-testid='main-view' size='large'>
      <h1>thom app</h1>
      <p>Welcome {authenticated ? user.email : 'Guest'}</p>
      {authenticated ? (
        <Button
          label='Logout'
          data-testid='logout-button'
          onClick={() => signout()}
        />
      ) : (
        <Link to={'/login'}>Sign In</Link>
      )}
    </Container>
  );
};

export default Main;
