import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ContentLoading } from 'thom-components';

import { Navigation } from '~/components/Navigation';
import { Profile } from '~/components/Profile';
import { DeviceContext } from '~/state/context/DeviceContext';
import { useAuth } from '~/hooks/useAuth';

export const Header = () => {
  const { user, busy, signout } = useAuth();
  const device = useContext(DeviceContext);

  return (
    <header className='flex columns-3 mt-2'>
      <div className='w-2/5'>
        <span className='text-primary text-4xl'>thom app</span>
      </div>
      <div className='w-3/5'>
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
      <div className='w-2/5 flex items-center'>
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
    </header>
  );
};
