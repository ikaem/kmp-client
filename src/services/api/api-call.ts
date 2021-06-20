import axios from 'axios';

import { ApiConfig } from './types';

export const createApiCall = (apiConfig: ApiConfig) => async () => {
  const url = apiConfig.path;
  const data = apiConfig.body;
  const method = apiConfig.method || 'GET';
  const headers = {
    'Content-Type': 'application/json',
  };
  const axiosConfig = {
    method,
    headers,
    url,
    data,
  };

  return axios(axiosConfig);
};
