import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().nonempty('Campo obrigatório'),
  password: z.string().nonempty('Campo obrigatório'),
});

export type LoginFormProps = z.infer<typeof loginSchema>;
