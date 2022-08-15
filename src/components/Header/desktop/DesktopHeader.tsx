import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ContentLoading } from 'thom-components';

import { Logo } from '~/components/Logo';
import { Navigation } from '~/components/Navigation';
import { Profile } from '~/components/Profile';
import { useAuth } from '~/hooks/useAuth';

const DesktopHeader = () => {
  const { user, busy, signout } = useAuth();
  return (
    <header className='flex items-center columns-3 mt-2'>
      <div className='w-2/5 min-w-[200px]'>
        <Logo />
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

export default DesktopHeader;
