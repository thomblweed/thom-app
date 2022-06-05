import { useState, useMemo, useEffect } from 'react';

import { Status } from '../enums/status.enum';
import { Credentials } from '../types/credentials.type';
import { User } from '../types/user.type';
import { useAxios } from './useAxios';

interface Auth {
  user: User | null;
  userStatus: Status;
  signin: (data: Credentials) => void;
  signout: () => void;
  getUser: () => void;
}

const statusNotLoading = (status: Status) => status !== Status.LOADING;

const useAuth = (): Auth => {
  const [user, setUser] = useState<User | null>(null);
  const [userStatus, setUserStatus] = useState<Status>(Status.LOADING);
  const [{ axiosResponse: userResponse, status }, getUser] = useAxios(
    '/api/users/currentuser',
    'GET'
  );
  const [{ axiosResponse: loginResponse, status: loginStatus }, signin] =
    useAxios<Credentials>('/api/users/signin', 'POST', true);
  const [{ axiosResponse: logoutResponse, status: logoutStatus }, signout] =
    useAxios<undefined>('/api/users/signout', 'POST', true);

  useEffect(() => {
    statusNotLoading(status) && setUserStatus(status);
  }, [status]);
  useEffect(() => {
    statusNotLoading(loginStatus) && setUserStatus(loginStatus);
  }, [loginStatus]);
  useEffect(() => {
    statusNotLoading(logoutStatus) && setUserStatus(logoutStatus);
  }, [logoutStatus]);
  useEffect(() => {
    loginResponse && setUser(loginResponse.data as User);
  }, [loginResponse]);
  useEffect(() => {
    userResponse && setUser(userResponse.data as User);
  }, [userResponse]);
  useEffect(() => {
    logoutResponse && setUser(null);
  }, [logoutResponse]);

  return useMemo(
    () => ({
      user,
      userStatus,
      signin,
      signout,
      getUser
    }),
    [user, userStatus, signin, signout, getUser]
  );
};

export { useAuth, Auth };
