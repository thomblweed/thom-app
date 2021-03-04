import { useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';

import config from '../config';
import {
  dataReducer,
  initialState,
  LOADING,
  DONE,
  ERROR
} from '../state/dataReducer';

const env = process.env.NODE_ENV || 'development';
const baseUrl = config[env].api.baseUrl;

const useAxios = (relativeUrl, type, manual = false) => {
  const axiosPost = useRef(null);
  const [axiosState, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    axiosPost.current = async (data) => {
      try {
        dispatch({ type: LOADING });
        const res = await axios({
          method: type,
          url: new URL(relativeUrl, baseUrl),
          withCredentials: true,
          data: data
        });
        dispatch({ type: DONE, payload: res });
      } catch (error) {
        dispatch({ type: ERROR });
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
