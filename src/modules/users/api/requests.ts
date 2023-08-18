import { axiosInstance } from '~/api';
import { GetUsersParams } from './types';
import { User } from '~/types';

export const getUsers = async ({ config }: GetUsersParams): Promise<Array<User>> => {
  const response = await axiosInstance.get('/users', config);

  return response.data;
};
