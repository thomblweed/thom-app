import { useState, useMemo } from 'react';

import { useAxios, INITIAL } from './useAxios';
import { useLogin } from './useLogin';
import { useLogout } from './useLogout';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userStatus, setUserStatus] = useState(INITIAL);
  const [
    {
      axiosState: { response: userResponse, status }
    }
  ] = useAxios('/api/users/currentuser', 'GET');
  const { loginUser, loginStatus, login } = useLogin();
  const { logoutUser, logoutStatus, logout } = useLogout();

  useMemo(() => {
    status && setUserStatus(status);
    userResponse && setUser(userResponse.data);
  }, [userResponse, status]);

  useMemo(() => {
    loginStatus && setUserStatus(loginStatus);
    loginUser && setUser(loginUser);
  }, [loginUser, loginStatus]);

  useMemo(() => {
    logoutStatus && setUserStatus(logoutStatus);
    logoutUser && setUser(null);
  }, [logoutUser, logoutStatus]);

  return useMemo(() => {
    return { user, userStatus, login, logout };
  }, [user, userStatus]);
};

export { useAuth };
