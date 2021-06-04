import { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { Credentials } from '../interfaces/credentials';

import { useAxios, Status } from './useAxios';

interface Login {
  loginResponse: AxiosResponse<any> | null;
  loginStatus: Status;
  login: (data: Credentials) => void;
}

const useLogin = (): Login => {
  const [{ axiosResponse: loginResponse, status: loginStatus }, signin] =
    useAxios<Credentials>('/api/users/signin', 'POST', true);

  const login = (data: Credentials) => {
    signin(data);
  };

  return useMemo(() => {
    return { loginResponse, loginStatus, login };
  }, [loginResponse, loginStatus, login]);
};

export { useLogin, Login };
