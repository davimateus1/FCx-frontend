import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { UserCredentials } from '~/types';

import { useCustomToast } from '~/hooks';

import { AxiosError } from 'axios';
import { UserAuth } from '../../types';
import { authUser } from '../../requests';

export const useLogin = (): UseMutationResult<
  {
    user: UserAuth;
    token: string;
  },
  unknown,
  UserCredentials,
  unknown
> => {
  const { showErrorToast } = useCustomToast();

  return useMutation(['login'], authUser, {
    onError: (error) => {
      if (error instanceof AxiosError) {
        const code = error?.response?.status;

        switch (code) {
          case 401:
            return showErrorToast({
              title: 'Erro ao fazer login',
              description: 'Login ou senha inválidos.',
            });
          case 404:
            return showErrorToast({
              title: 'Erro ao fazer login',
              description: 'Usuário não encontrado.',
            });
          case 444:
            return showErrorToast({
              title: 'Erro ao fazer login',
              description: 'Usuário inativo ou bloqueado.',
            });
          default:
            return showErrorToast({
              title: 'Erro ao fazer login',
              description: 'Login ou senha inválidos.',
            });
        }
      }
    },
  });
};
