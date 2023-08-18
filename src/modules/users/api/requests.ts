import { axiosInstance } from '~/api';
import { ChangeStatusParams, GetUsersParams } from './types';
import { User } from '~/types';

export const getUsers = async ({ config }: GetUsersParams): Promise<Array<User>> => {
  const response = await axiosInstance.get('/users', config);

  return response.data;
};

export const changeUserStatus = async ({ id, status }: ChangeStatusParams): Promise<void> => {
  await axiosInstance.delete(`/users/${id}`, { data: { status: status } });
};
