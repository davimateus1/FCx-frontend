import { z } from 'zod';

export const editUserSchema = z.object({
  name: z.string().min(3).max(255).nonempty('Nome é obrigatório'),
  email: z.string().email().nonempty('Email é obrigatório'),
  login: z.string().min(3).max(255).nonempty('Login é obrigatório'),
  age: z.string().optional(),
  phone: z.string().min(10).max(15).nonempty('Telefone é obrigatório'),
  birthDate: z.string().nonempty('Data de nascimento é obrigatório'),
  status: z.enum(['Ativo', 'Inativo', 'Bloqueado']),
  cpf: z.string().nonempty('CPF é obrigatório'),
  motherName: z.string().nonempty(),
});

export type EditUserSchemaProps = z.infer<typeof editUserSchema>;
