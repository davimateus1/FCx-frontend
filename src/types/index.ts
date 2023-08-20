export type User = {
  id: number;
  name: string;
  login: string;
  email: string;
  phone: string;
  cpf: string;
  birthDate: string;
  age: number;
  motherName: string;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
};

export type UserForm = Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'age'>;

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}

export type UserCredentials = {
  login: string;
  password: string;
};
