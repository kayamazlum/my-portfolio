import { apiInstance } from '..';

export const getAllProjectsServices = async () => {
  const data = apiInstance.get(`/get-projects`);
  return data;
};

// export const getProjectDetailServices = async (_id: string) => {
//   const data = apiInstance.get(`/get-projects/${_id}`);
//   return data;
// };
