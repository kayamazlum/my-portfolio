import { apiInstance } from '..';

export const getAboutServices = async () => {
  const data = apiInstance.get(`/get-about`);
  return data;
};
