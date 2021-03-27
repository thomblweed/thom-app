import { useState, useMemo } from 'react';
import { User } from '../types/user';

import { useAxios, Status } from './useAxios';
import { useLogin } from './useLogin';
import { useLogout } from './useLogout';

const emptyUser: User = {
  id: '',
  email: ''
};

const useAuth = () => {
  const [user, setUser] = useState<User>(emptyUser);
  const [userStatus, setUserStatus] = useState<Status>(Status.INITIAL);
  const [{ axiosResponse: userResponse, status }] = useAxios(
    '/api/users/currentuser',
    'GET'
  );
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
    logoutUser && setUser(emptyUser);
  }, [logoutUser, logoutStatus]);

  return useMemo(() => {
    return { user, userStatus, login, logout };
  }, [user, userStatus]);
};

export { useAuth };
