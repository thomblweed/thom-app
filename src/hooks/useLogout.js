import { useState, useEffect, useMemo } from 'react';

import { useAxios, INITIAL } from './useAxios';

const useLogout = () => {
  const [logoutUser, setLogoutUser] = useState(null);
  const [logoutStatus, setLogoutStatus] = useState(INITIAL);
  const [
    {
      axiosState: { response: signoutResponse, status: signoutStatus }
    },
    signout
  ] = useAxios('/api/users/signout', 'POST', true);

  useEffect(() => {
    signoutStatus && setLogoutStatus(signoutStatus);
    signoutResponse && setLogoutUser(signoutResponse.data);
  }, [signoutResponse, signoutStatus]);

  const logout = () => {
    signout();
  };

  return useMemo(() => {
    return { logoutUser, logoutStatus, logout };
  }, [logoutUser, logoutStatus]);
};

export { useLogout };
