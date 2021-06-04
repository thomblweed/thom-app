import { useState, useMemo, useEffect } from 'react';
import { Credentials } from '../interfaces/credentials';
import { emptyUser, User } from '../interfaces/user';

import { useAxios, Status } from './useAxios';
import { Login, useLogin } from './useLogin';
import { Logout, useLogout } from './useLogout';

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
  const { loginResponse, loginStatus, login }: Login = useLogin();
  const { logoutResponse, logoutStatus, logout }: Logout = useLogout();

  useEffect(() => {
    setUserStatus(status);
  }, [status]);
  useEffect(() => {
    setUserStatus(loginStatus);
  }, [loginStatus]);
  useEffect(() => {
    setUserStatus(logoutStatus);
  }, [logoutStatus]);
  useEffect(() => {
    loginResponse && setUser(loginResponse.data);
  }, [loginResponse]);
  useEffect(() => {
    userResponse && setUser(userResponse.data);
  }, [userResponse]);
  useEffect(() => {
    logoutResponse && setUser(emptyUser);
  }, [logoutResponse]);

  return useMemo(() => {
    return { user, userStatus, login, logout };
  }, [user, userStatus, login, logout]);
};

export { useAuth, Auth };
