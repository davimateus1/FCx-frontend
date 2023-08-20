import { z } from 'zod';

export const editUserSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().nonempty('Email é obrigatório').email('Email inválido'),
  login: z.string().nonempty('Login é obrigatório'),
  phone: z.string().nonempty('Telefone é obrigatório').min(14, {
    message: 'Telefone deve ter 11 caracteres',
  }),
  birthDate: z
    .string()
    .nonempty('Data de nascimento é obrigatória')
    .refine((value) => {
      const date = new Date(value);
      const now = new Date();
      const age = now.getFullYear() - date.getFullYear();
      return age >= 18;
    }, 'Usuário deve ter mais de 18 anos'),

  status: z.enum(['Ativo', 'Inativo', 'Bloqueado'], {
    errorMap: () => ({ message: 'Status deve ser Ativo, Inativo ou Bloqueado' }),
  }),
  cpf: z.string().nonempty('CPF é obrigatório').min(14, {
    message: 'CPF deve ter 11 caracteres',
  }),
  motherName: z.string().nonempty('Nome da mãe é obrigatório'),
});

export type EditUserSchemaProps = z.infer<typeof editUserSchema>;

export const createUserSchema = editUserSchema.extend({
  password: z.string().nonempty('Senha é obrigatório').min(6, {
    message: 'Senha deve ter no mínimo 6 caracteres',
  }),
});

export type CreateUserSchemaProps = z.infer<typeof createUserSchema>;
