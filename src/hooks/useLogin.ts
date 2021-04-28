import { useState, useEffect, useMemo } from 'react';
import { Credentials } from '../types/credentials';
import { emptyUser, User } from '../types/user';

import { useAxios, Status } from './useAxios';

interface Login {
  loginUser: User;
  loginStatus: Status;
  login: (data: Credentials) => void;
}

const useLogin = (): Login => {
  const [loginUser, setLoginUser] = useState<User>(emptyUser);
  const [loginStatus, setLoginStatus] = useState<Status>(Status.INITIAL);
  const [{ axiosResponse, status }, signin] = useAxios<Credentials>(
    '/api/users/signin',
    'POST',
    true
  );

  useEffect(() => {
    status && setLoginStatus(status);
    axiosResponse && setLoginUser(axiosResponse.data);
  }, [axiosResponse, status]);

  const login = (data: Credentials) => {
    signin(data);
  };

  return useMemo(() => {
    return { loginUser, loginStatus, login };
  }, [loginUser, loginStatus]);
};

export { useLogin, Login };
