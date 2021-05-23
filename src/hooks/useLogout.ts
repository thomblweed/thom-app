import { AxiosResponse } from 'axios';
import { useMemo } from 'react';

import { useAxios, Status } from './useAxios';

interface Logout {
  logoutResponse: AxiosResponse<any> | null;
  logoutStatus: Status;
  logout: () => void;
}

const useLogout = (): Logout => {
  const [
    { axiosResponse: logoutResponse, status: logoutStatus },
    signout
  ] = useAxios<undefined>('/api/users/signout', 'POST', true);

  const logout = () => {
    signout(undefined);
  };

  return useMemo(() => {
    return { logoutResponse, logoutStatus, logout };
  }, [logoutStatus, logoutResponse]);
};

export { useLogout, Logout };
