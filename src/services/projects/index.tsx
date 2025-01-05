import { appConfig } from '@/config';
import axios from 'axios';

export const getAllProjectsServices = async () => {
  const data = axios.get(`${appConfig.apiUrl}/get-projects`);
  return data;
};
