import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../state/userProvider';

const Main = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate('/login');
  }, [user]);

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
