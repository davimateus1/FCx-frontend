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

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}
