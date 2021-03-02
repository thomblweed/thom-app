import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import config from '../config';

const env = process.env.NODE_ENV || 'development';
const baseUrl = config[env].api.baseUrl;

const useAxios = (relativeUrl, manual, type) => {
  const axiosPost = useRef(null);
  const [status, setStatus] = useState('INITIAL');
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axiosPost.current = async (data) => {
      try {
        setStatus('LOADING');
        const res = await axios({
          method: type,
          url: new URL(relativeUrl, baseUrl),
          withCredentials: true,
          data: data
        });
        setResponse(res);
        setStatus('DONE');
      } catch (error) {
        setStatus('ERROR');
        console.log('error :', error);
      }
    };
    !response && !manual && axiosPost.current();
  }, [response, relativeUrl, manual]);

  return [
    { response, status },
    (data) => {
      axiosPost.current(data);
    }
  ];
};

export { useAxios };
