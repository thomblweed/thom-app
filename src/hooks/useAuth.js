import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser('User');
    console.log('LOGIN');
  };

  const logout = () => {
    setUser(null);
    console.log('LOGOUT');
  };

  return {
    user,
    login,
    logout
  };
};

export { useAuth };
