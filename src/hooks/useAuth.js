import { useState, useEffect } from 'react';

import { useAxios } from './useAxios';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [{ axiosState: userState }] = useAxios('/api/users/currentuser', 'GET');
  const [{ axiosState: signinState }, signin] = useAxios(
    '/api/users/signin',
    'POST',
    true
  );
  const [{ axiosState: signoutState }, signout] = useAxios(
    '/api/users/signout',
    'POST',
    true
  );

  useEffect(() => {
    userState.response && setUser(userState.response.data);
  }, [userState.response]);

  useEffect(() => {
    signinState.response && setUser(signinState.response.data);
  }, [signinState.response]);

  useEffect(() => {
    signoutState.response && setUser(null);
  }, [signoutState.response]);

  const login = (data) => {
    signin(data);
  };

  const logout = () => {
    signout();
  };

  return { user, login, logout };
};

export { useAuth };
