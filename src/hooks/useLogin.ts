import { AxiosResponse } from 'axios';
import { useState, useEffect, useMemo } from 'react';
import { Credentials } from '../types/credentials';
import { emptyUser, User } from '../types/user';

import { useAxios, Status } from './useAxios';

interface Login {
  loginResponse: AxiosResponse<any> | null;
  loginStatus: Status;
  login: (data: Credentials) => void;
}

const useLogin = (): Login => {
  const [
    { axiosResponse: loginResponse, status: loginStatus },
    signin
  ] = useAxios<Credentials>('/api/users/signin', 'POST', true);

  const login = (data: Credentials) => {
    signin(data);
  };

  return useMemo(() => {
    return { loginResponse, loginStatus, login };
  }, [loginResponse, loginStatus]);
};

export { useLogin, Login };
