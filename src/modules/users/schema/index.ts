import { z } from 'zod';

export const editUserSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().nonempty('Email é obrigatório').email('Email inválido'),
  login: z.string().nonempty('Login é obrigatório'),
  age: z.string().refine((age) => Number(age) >= 18, {
    message: 'Apenas maiores de 18 anos podem usar o sistema.',
  }),
  phone: z.string().nonempty('Telefone é obrigatório').min(14, {
    message: 'Telefone deve ter 11 caracteres.',
  }),
  birthDate: z.string().nonempty('Data de nascimento é obrigatório'),
  status: z.enum(['Ativo', 'Inativo', 'Bloqueado'], {
    errorMap: () => ({ message: 'Status deve ser Ativo, Inativo ou Bloqueado.' }),
  }),
  cpf: z.string().nonempty('CPF é obrigatório').min(14, {
    message: 'CPF deve ter 11 caracteres.',
  }),
  motherName: z.string().nonempty('Nome da mãe é obrigatório'),
});

export type EditUserSchemaProps = z.infer<typeof editUserSchema>;
