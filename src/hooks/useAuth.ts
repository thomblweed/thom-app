import { useState, useMemo } from 'react';
import { Credentials } from '../types/credentials';
import { emptyUser, User } from '../types/user';

import { useAxios, Status } from './useAxios';
import { useLogin } from './useLogin';
import { useLogout } from './useLogout';

interface Auth {
  user: User;
  userStatus: Status;
  login: (data: Credentials) => void;
  logout: () => void;
}

const useAuth = (): Auth => {
  const [user, setUser] = useState<User>(emptyUser);
  const [userStatus, setUserStatus] = useState<Status>(Status.INITIAL);
  const [{ axiosResponse: userResponse, status }] = useAxios(
    '/api/users/currentuser',
    'GET'
  );
  const { loginUser, loginStatus, login } = useLogin();
  const { logoutResponse, logoutStatus, logout } = useLogout();

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
    logoutResponse && setUser(emptyUser);
  }, [logoutResponse, logoutStatus]);

  return useMemo(() => {
    return { user, userStatus, login, logout };
  }, [user, userStatus]);
};

export { useAuth, Auth };
