import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button, Container, ContentLoading } from 'thom-components';

import { Navigation } from '~/components/Navigation';
import { Profile } from '~/components/Profile/Profile';
import { useAuth } from '~/hooks/useAuth';

export const Main = (): JSX.Element => {
  const { user, busy, signout } = useAuth();

  return (
    <Container data-testid='main-view' size='large'>
      <header>
        <div className='flex justify-between'>
          <h1 className='text-3xl'>thom app</h1>
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
                  lines: [{ width: '25%', id: 'line1' }]
                }
              ]}
            />
          ) : (
            <Profile user={user} />
          )}
          {user && <Button label='Logout' onClick={() => signout()} />}
        </div>
      </header>
      <Outlet />
    </Container>
  );
};
