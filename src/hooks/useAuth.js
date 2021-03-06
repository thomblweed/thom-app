import { useState, useEffect, useMemo } from 'react';

import { useAxios, DONE, ERROR } from './useAxios';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userStatus, setUserStatus] = useState(false);
  const [
    {
      axiosState: { response: userResponse, status }
    }
  ] = useAxios('/api/users/currentuser', 'GET');
  const [
    {
      axiosState: { response: signinResponse }
    },
    signin
  ] = useAxios('/api/users/signin', 'POST', true);
  const [
    {
      axiosState: { response: signoutResponse }
    },
    signout
  ] = useAxios('/api/users/signout', 'POST', true);

  useEffect(() => {
    (status === DONE || status === ERROR) && setUserStatus(true);
    userResponse && setUser(userResponse.data);
  }, [userResponse, status]);

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

  return useMemo(() => {
    return { user, userStatus, login, logout };
  }, [user, userStatus]);
};

export { useAuth };
