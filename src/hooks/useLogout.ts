import { AxiosResponse } from 'axios';
import { useState, useEffect, useMemo } from 'react';

import { useAxios, Status } from './useAxios';

interface Logout {
  logoutResponse: AxiosResponse<any> | null;
  logoutStatus: Status;
  logout: () => void;
}

const useLogout = (): Logout => {
  const [logoutStatus, setLogoutStatus] = useState<Status>(Status.INITIAL);
  const [
    { axiosResponse: logoutResponse, status },
    signout
  ] = useAxios<undefined>('/api/users/signout', 'POST', true);

  useEffect(() => {
    status && setLogoutStatus(status);
  }, [status]);

  const logout = () => {
    signout(undefined);
  };

  return useMemo(() => {
    return { logoutResponse, logoutStatus, logout };
  }, [logoutStatus, logoutResponse]);
};

export { useLogout, Logout };
