import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button, Container, ContentLoading } from 'thom-components';

import { Navigation } from '../components/Navigation';
import { useAuth } from '../hooks/useAuth';

export const Main = (): JSX.Element => {
  const { user, busy, signout } = useAuth();

  return (
    <Container data-testid='main-view' size='large'>
      <h1>thom app</h1>
      <Navigation
        items={[
          { value: 'Home', route: '/' },
          { value: 'Blog', route: '/blog' }
        ]}
        content={({ value, route }) => <Link to={route}>{value}</Link>}
      />
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
      <Outlet />
    </Container>
  );
};
