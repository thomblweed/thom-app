import { useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';

import config from '../config';

const env = process.env.NODE_ENV || 'development';
const baseUrl = config[env].api.baseUrl;

export const INITIAL = 'INITIAL';
export const LOADING = 'LOADING';
export const DONE = 'DONE';
export const ERROR = 'ERROR';

const useAxios = (relativeUrl, type, manual = false) => {
  const axiosPost = useRef(null);
  const [axiosState, setAxiosState] = useState({
    response: null,
    status: INITIAL
  });

  useEffect(() => {
    axiosPost.current = async (data) => {
      try {
        setAxiosState((state) => ({ ...state, status: LOADING }));
        const res = await axios({
          method: type,
          url: new URL(relativeUrl, baseUrl),
          withCredentials: true,
          data: data
        });
        setAxiosState({ response: res, status: DONE });
      } catch (error) {
        setAxiosState((state) => ({ ...state, status: ERROR }));
      }
    };
    !axiosState.response && !manual && axiosPost.current();
  }, [axiosState.response, relativeUrl, manual]);

  return [
    { axiosState },
    (data) => {
      axiosPost.current(data);
    }
  ];
};

export { useAxios };
