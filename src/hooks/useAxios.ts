import { useEffect, useRef, useState } from 'react';
import axios, { AxiosResponse, Method } from 'axios';

import { config } from '../config';

const env: string | undefined = process.env.NODE_ENV || 'development';
const baseUrl: string = config[env].api.baseUrl;

export enum Status {
  INITIAL,
  LOADING,
  DONE,
  ERROR
}

interface Response {
  axiosResponse: AxiosResponse<any> | null;
  status: Status;
}

type Axios = [Response, (data: any) => void];

const useAxios = (
  relativeUrl: string,
  type: Method,
  manual: boolean = false
): Axios => {
  const axiosRef = useRef<(data: any) => Promise<void>>();
  const [axiosState, setAxiosState] = useState<Response>({
    axiosResponse: null,
    status: Status.INITIAL
  });

  useEffect(() => {
    axiosRef.current = async (data: any) => {
      try {
        setAxiosState((state) => ({ ...state, status: Status.LOADING }));
        const res = await axios({
          method: type,
          url: new URL(relativeUrl, baseUrl).toString(),
          withCredentials: true,
          data: data
        });
        setAxiosState({ axiosResponse: res, status: Status.DONE });
      } catch (error) {
        setAxiosState((state) => ({ ...state, status: Status.ERROR }));
      }
    };
    !axiosState.axiosResponse && !manual && axiosRef.current(undefined);
  }, [axiosState.axiosResponse, relativeUrl, manual]);

  return [
    axiosState,
    (data: any) => {
      axiosRef.current && axiosRef.current(data);
    }
  ];
};

export { useAxios };
