import { axiosInstance } from '~/api';
import { UserCredentials } from '~/types';
import { RecoverParams, UserAuthResponse } from './types';

export const authUser = async (data: UserCredentials): Promise<UserAuthResponse> => {
  const response = await axiosInstance.post('/auth/login', data);

  return response.data;
};

export const recoverPassword = async (data: RecoverParams): Promise<void> => {
  await axiosInstance.patch('/auth/recover-password', data);
};
