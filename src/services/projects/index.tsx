import { apiInstance } from '..';

export const getAllProjectsServices = async () => {
  const data = apiInstance.get(`/get-projects`);
  return data;
};

export const getProjectDetailsServices = async (_id: string) => {
  const data = apiInstance.get(`/details-project?_id=${_id}`);
  return data;
};
