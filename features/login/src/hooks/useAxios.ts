import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse, Method } from 'axios';

import { config, Environment } from '../config';
import { Status } from '../enums/status.enum';

const env: Environment = (process.env.NODE_ENV as Environment) ?? 'development';
const baseUrl: string = config[env].api.auth.baseUrl;

interface Response {
  axiosResponse: AxiosResponse<unknown> | null;
  status: Status;
}

type Axios<T> = [Response, (data?: T) => void];

const useAxios = <T>(
  relativeUrl: string,
  type: Method,
  manual?: boolean
): Axios<T> => {
  const [axiosState, setAxiosState] = useState<Response>({
    axiosResponse: null,
    status: Status.LOADING
  });

  const callAxios = useCallback(
    async (data?: T) => {
      try {
        const res = await axios({
          method: type,
          url: new URL(relativeUrl, baseUrl).toString(),
          withCredentials: true,
          ...(data && { data })
        });
        setAxiosState({ axiosResponse: res, status: Status.DONE });
      } catch (error) {
        setAxiosState((state) => ({ ...state, status: Status.ERROR }));
      }
    },
    [relativeUrl, type]
  );

  useEffect(() => {
    !axiosState.axiosResponse && !manual && callAxios();
  }, [axiosState.axiosResponse, manual, callAxios]);

  return [axiosState, callAxios];
};

export { useAxios };
