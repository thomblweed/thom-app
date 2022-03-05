import { useState, useMemo, useEffect } from 'react';
import { Status } from 'shared';

import { Credentials } from '../interfaces/credentials';
import { User } from '../interfaces/user';
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
  const [{ axiosResponse: userResponse, status }, getUser] = useAxios<
    undefined,
    User
  >('/api/users/currentuser', 'GET');
  const [{ axiosResponse: loginResponse, status: loginStatus }, signin] =
    useAxios<Credentials, User>('/api/users/signin', 'POST', true);
  const [{ axiosResponse: logoutResponse, status: logoutStatus }, signout] =
    useAxios<undefined, unknown>('/api/users/signout', 'POST', true);

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
    loginResponse && setUser(loginResponse.data);
  }, [loginResponse]);
  useEffect(() => {
    userResponse && setUser(userResponse.data);
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
