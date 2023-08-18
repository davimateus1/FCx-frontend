import { AxiosRequestConfig } from 'axios';
import { UserStatus } from '~/types';

export type GetUsersParams = {
  config?: AxiosRequestConfig;
};

export type ChangeStatusParams = {
  id: number;
  status: UserStatus;
};
