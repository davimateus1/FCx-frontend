import { axiosInstance } from '~/api';
import { UserCredentials } from '~/types';
import { UserAuthResponse } from './types';

export const authUser = async (data: UserCredentials): Promise<UserAuthResponse> => {
  const response = await axiosInstance.post('/auth/login', data);

  return response.data;
};
