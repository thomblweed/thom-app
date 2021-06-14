import React, { useContext } from 'react';

import { AuthContext } from '../state/authProvider';

const Main = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div data-testid='main-container'>
      <h1>thom app</h1>
      <p data-testid='welcome-email'>
        Welcome <strong>{user.email}</strong>
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Main;
