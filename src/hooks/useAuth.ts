import { useState, useMemo } from 'react';
import { Credentials } from '../types/credentials';
import { emptyUser, User } from '../types/user';

import { useAxios, Status } from './useAxios';
import { Login, useLogin } from './useLogin';
import { Logout, useLogout } from './useLogout';
import { useMemoState } from './useMemoState';

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

  useMemo(() => {
    setUserStatus(status);
  }, [status]);

  useMemo(() => {
    setUserStatus(loginStatus);
  }, [loginStatus]);

  useMemo(() => {
    setUserStatus(logoutStatus);
  }, [logoutStatus]);

  useMemo(() => {
    loginResponse && setUser(loginResponse.data);
  }, [loginResponse]);

  useMemo(() => {
    userResponse && setUser(userResponse.data);
  }, [userResponse]);

  useMemo(() => {
    logoutResponse && setUser(emptyUser);
  }, [logoutResponse]);

  return useMemo(() => {
    return { user, userStatus, login, logout };
  }, [user, userStatus]);
};

export { useAuth, Auth };
