import { useState, useEffect, useMemo } from 'react';

import { useAxios, INITIAL } from './useAxios';

const useLogin = () => {
  const [loginUser, setLoginUser] = useState(null);
  const [loginStatus, setLoginStatus] = useState(INITIAL);
  const [
    {
      axiosState: { response: signinResponse, status: signinStatus }
    },
    signin
  ] = useAxios('/api/users/signin', 'POST', true);

  useEffect(() => {
    signinStatus && setLoginStatus(signinStatus);
    signinResponse && setLoginUser(signinResponse.data);
  }, [signinResponse, signinStatus]);

  const login = (data) => {
    signin(data);
  };

  return useMemo(() => {
    return { loginUser, loginStatus, login };
  }, [loginUser, loginStatus]);
};

export { useLogin };
