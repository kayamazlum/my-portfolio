import { appConfig } from '@/config';
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

export const apiInstance: AxiosInstance = axios.create({
  baseURL: appConfig.apiUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // config.headers['GGGGGGGGGG'] = 'BBBBBBB';
    // config.headers.Authorization = 'Bearer TOKENNNNNNNN';
    console.log('Request sent successfully');
    return config;
  },
  (error: AxiosError) => {
    console.log('Request Error!!', error);
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (config: AxiosResponse) => {
    console.log('Response sent successfully');
    return config;
  },
  (error: AxiosError) => {
    console.log('Response Error!!', error);
    return Promise.reject(error);
  }
);
