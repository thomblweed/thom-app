import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
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
          <h1 className='w-1/5'>thom app</h1>
          <div className='w-3/5 flex'>
            <Navigation
              items={[
                { value: 'Home', route: '/' },
                { value: 'Blog', route: '/blog' }
              ]}
              content={({ value, route }) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'underline underline-offset-8' : 'text-alternate'
                  }
                  to={route}
                >
                  {value}
                </NavLink>
              )}
            />
          </div>
          <div className='w-1/5'>
            {busy ? (
              <ContentLoading
                loadingSchema={[
                  {
                    lines: [{ width: '100%', id: 'line1' }]
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
