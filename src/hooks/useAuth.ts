import { useMutation, useQuery, useQueryClient } from 'react-query';

import {
  getCurrentUser,
  signoutUser,
  signinUser
} from '../service/user.service';

const USER_QUERY_KEY = 'user';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { data: user, isFetching: loadingUser } = useQuery(
    USER_QUERY_KEY,
    getCurrentUser,
    {
      onError: () => {
        user && queryClient.setQueryData(USER_QUERY_KEY, undefined);
      }
    }
  );
  const { mutateAsync: signinAsync, isLoading: signingIn } = useMutation(
    signinUser,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(USER_QUERY_KEY, data);
      }
    }
  );
  const { mutate: signout, isLoading: loggingOut } = useMutation(signoutUser, {
    onSuccess: () => {
      queryClient.setQueryData(USER_QUERY_KEY, undefined);
    }
  });

  return {
    user,
    busy: loadingUser || loggingOut || signingIn,
    signout,
    signinAsync
  };
};
