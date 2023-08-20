import { z } from 'zod';

export const loginSchema = z.object({
  login: z.string().nonempty('Login é obrigatório'),
  password: z.string().nonempty('Senha é obrigatória'),
});

export type LoginFormProps = z.infer<typeof loginSchema>;

export const recoverSchema = z.object({
  email: z.string().nonempty('Email é obrigatório').email('E-mail inválido'),
  login: z.string().nonempty('Login é obrigatório'),
  cpf: z.string().nonempty('CPF é obrigatório').min(14, {
    message: 'CPF deve ter 11 caracteres',
  }),
  password: z.string().nonempty('Senha é obrigatória'),
});

export type RecoverFormProps = z.infer<typeof recoverSchema>;
