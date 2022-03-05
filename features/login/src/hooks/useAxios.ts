import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse, Method } from 'axios';
import { Status } from 'shared';

import { config, Environment } from '../config';

const env: Environment = (process.env.NODE_ENV as Environment) ?? 'development';
const baseUrl: string = config[env].api.auth.baseUrl;

interface Response<ResponseType> {
  axiosResponse: AxiosResponse<ResponseType> | null;
  status: Status;
}

type Axios<DataType, ResponseType> = [
  Response<ResponseType>,
  (data?: DataType) => void
];

const useAxios = <DataType, ResponseType>(
  relativeUrl: string,
  type: Method,
  manual?: boolean
): Axios<DataType, ResponseType> => {
  const [axiosState, setAxiosState] = useState<Response<ResponseType>>({
    axiosResponse: null,
    status: Status.LOADING
  });

  const callAxios = useCallback(
    async (data?: DataType) => {
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
