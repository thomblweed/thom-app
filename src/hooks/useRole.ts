import { useContext } from 'react';
import { Role } from '../interfaces/role';
import { AuthContext } from '../state/authProvider';

const useRole = (): Role | undefined => {
  const { user } = useContext(AuthContext);
  return user?.role;
};

export { useRole };
