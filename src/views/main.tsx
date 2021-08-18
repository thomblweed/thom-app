import React, { useContext } from 'react';
import { Button } from 'thom-components';
import { Status } from '../hooks/useAxios';

import { AuthContext } from '../state/authProvider';

const Main = () => {
  const { user, userStatus, signout } = useContext(AuthContext);
  const busy = userStatus === Status.LOADING;

  return (
    <div data-testid='main-container'>
      <h1>thom app</h1>
      <p data-testid='welcome-email'>
        Welcome <strong>{user.email}</strong>
      </p>
      <Button
        label='Logout'
        data-testid='logout-button'
        onClick={() => signout()}
        disabled={busy}
        loading={busy}
      />
    </div>
  );
};

export default Main;
