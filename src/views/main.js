import React, { useContext } from 'react';

import { UserContext } from '../state/user-provider';

const Main = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <div>
      <h1>thom app</h1>
      <p>
        Welcome <strong>{user.email}</strong>
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Main;
