import { z } from 'zod';
import { UserStatus } from '~/types';

export const editUserSchema = z.object({
  name: z.string().min(3).max(255).nonempty('Nome é obrigatório'),
  email: z.string().email().nonempty('Email é obrigatório'),
  login: z.string().min(3).max(255).nonempty('Login é obrigatório'),
  age: z.number().int().positive().min(18).max(120),
  phone: z.string().min(10).max(15).nonempty('Telefone é obrigatório'),
  birthDate: z.string().nonempty('Data de nascimento é obrigatório'),
  status: z.enum([UserStatus.ACTIVE, UserStatus.INACTIVE, UserStatus.BLOCKED]),
  cpf: z.string().nonempty('CPF é obrigatório'),
  motherName: z.string().nonempty(),
});

export type EditUserSchemaProps = z.infer<typeof editUserSchema>;
