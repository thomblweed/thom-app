import { useState, useEffect } from 'react';

import { useAxios } from './useAxios';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [
    { response: userResponse, status: userStatus },
    getCurrentUser
  ] = useAxios('/api/users/currentuser', true, 'GET');
  const [{ response: signinResponse }, signin] = useAxios(
    '/api/users/signin',
    true,
    'POST'
  );
  const [{ response: signoutResponse }, signout] = useAxios(
    '/api/users/signout',
    true,
    'POST'
  );

  useEffect(() => {
    !userResponse && getCurrentUser();
    userResponse && setUser(userResponse.data);
  }, [userResponse]);

  useEffect(() => {
    signinResponse && setUser(signinResponse.data);
  }, [signinResponse]);

  useEffect(() => {
    signoutResponse && setUser(null);
  }, [signoutResponse]);

  const login = (data) => {
    signin(data);
  };

  const logout = () => {
    signout();
  };

  return { user, userStatus, login, logout };
};

export { useAuth };
