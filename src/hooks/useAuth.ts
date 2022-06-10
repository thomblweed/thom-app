import { useMutation, useQuery } from 'react-query';

import { getCurrentUser, signoutUser } from '../service/user.service';
import { User } from '../types/user.type';
import { useStore } from './useStore';

export const useAuth = () => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const { isFetching: loadingUser } = useQuery<User>('user', getCurrentUser, {
    onSuccess: (user) => {
      setUser(user);
    },
    onError: () => {
      user && setUser(null);
    }
  });
  const { mutate: signout, isLoading: loggingOut } = useMutation(signoutUser, {
    onSuccess: () => {
      setUser(null);
    }
  });

  return { user, busy: loadingUser || loggingOut, signout };
};
