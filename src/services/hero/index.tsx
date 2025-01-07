import { apiInstance } from '..';

export const getHeroServices = async () => {
  const data = apiInstance.get(`/get-hero`);
  return data;
};
