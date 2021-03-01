import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (data) => {
    console.log('user login:>> ', data);
    setUser(data);
    console.log('LOGIN');
  };

  const logout = () => {
    setUser(null);
    console.log('LOGOUT');
  };

  console.log('user hook :>> ', user);

  return { user, login, logout };
};

export { useAuth };
