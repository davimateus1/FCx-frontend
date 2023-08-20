import { User, UserCredentials } from '~/types';

export type UserAuth = Omit<
  User,
  'phone' | 'cpf' | 'birthDate' | 'age' | 'motherName' | 'status' | 'createdAt' | 'updatedAt'
>;

export type UserAuthParams = {
  data: UserCredentials;
};

export type UserAuthResponse = {
  user: UserAuth;
  token: string;
};

export type RecoverParams = {
  email: string;
  login: string;
  cpf: string;
  password: string;
};
