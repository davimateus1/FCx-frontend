import { axiosInstance } from '~/api';
import { ChangeStatusParams, GetUserParams, GetUsersParams } from './types';
import { User } from '~/types';

export const getUsers = async ({ config }: GetUsersParams): Promise<Array<User>> => {
  const response = await axiosInstance.get('/users', config);

  return response.data;
};

export const getUser = async ({ id }: GetUserParams): Promise<User> => {
  const response = await axiosInstance.get(`/users/${id}`);

  return response.data;
};

export const changeUserStatus = async ({ id, status }: ChangeStatusParams): Promise<void> => {
  return await axiosInstance.delete(`/users/${id}`, { data: { status: status } });
};

export const changeAllStatus = async (): Promise<void> => {
  return await axiosInstance.delete('/users/all');
};
