import { User } from '~/types';

export type UserAuth = Omit<
  User,
  'phone' | 'cpf' | 'birthDate' | 'age' | 'motherName' | 'status' | 'createdAt' | 'updatedAt'
>;

export type UserAuthResponse = {
  user: UserAuth;
  token: string;
};
