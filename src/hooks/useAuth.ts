import { useState, useMemo, useEffect } from 'react';
import { Credentials } from '../interfaces/credentials';
import { emptyUser, User } from '../interfaces/user';

import { useAxios, Status } from './useAxios';

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
  const [{ axiosResponse: loginResponse, status: loginStatus }, signin] =
    useAxios<Credentials>('/api/users/signin', 'POST', true);
  const [{ axiosResponse: logoutResponse, status: logoutStatus }, signout] =
    useAxios<undefined>('/api/users/signout', 'POST', true);

  const login = (data: Credentials) => {
    signin(data);
  };

  const logout = () => {
    signout(undefined);
  };

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
