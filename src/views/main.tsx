import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button, ContentLoading } from 'thom-components';

import { Navigation } from '~/components/Navigation';
import { Profile } from '~/components/Profile/Profile';
import { useAuth } from '~/hooks/useAuth';

export const Main = (): JSX.Element => {
  const { user, busy, signout } = useAuth();

  return (
    <div className='h-full' data-testid='main-view'>
      <header>
        <div className='flex columns-3'>
          <h1 className='text-3xl w-1/5 text-primary'>thom app</h1>
          <Navigation
            className='w-3/5'
            items={[
              { value: 'Home', route: '/' },
              { value: 'Blog', route: '/blog' }
            ]}
            content={({ value, route }) => <Link to={route}>{value}</Link>}
          />
          <div className='w-1/5'>
            {busy ? (
              <ContentLoading
                loadingSchema={[
                  {
                    lines: [{ width: '25%', id: 'line1' }]
                  }
                ]}
              />
            ) : user ? (
              <>
                <Profile user={user} />
                <Button label='Logout' onClick={() => signout()} />
              </>
            ) : null}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
