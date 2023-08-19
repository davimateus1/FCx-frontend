import { AxiosRequestConfig } from 'axios';
import { User, UserStatus } from '~/types';

export type GetUsersParams = {
  config?: AxiosRequestConfig;
};

export type GetUserParams = {
  id: number;
};

export type ChangeStatusParams = {
  id: number;
  status: UserStatus;
};

export type UpdateUserParams = {
  id: number;
  data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
};
