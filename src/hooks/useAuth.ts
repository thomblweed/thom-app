import { useState, useMemo, useEffect } from 'react';
import { Credentials } from '../interfaces/credentials';
import { emptyUser, User } from '../interfaces/user';

import { useAxios, Status } from './useAxios';

interface Auth {
  user: User;
  userStatus: Status;
  signin: (data: Credentials) => void;
  signout: () => void;
  getUser: () => void;
}

const statusNotLoading = (status: Status) => status !== Status.LOADING;

const useAuth = (): Auth => {
  const [user, setUser] = useState<User>(emptyUser);
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
    logoutResponse && setUser(emptyUser);
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
