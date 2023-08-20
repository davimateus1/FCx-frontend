import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { UserForm } from '~/types';
import { createUser } from '../../requests';

import { queryClient } from '~/lib/react-query';
import { useCustomToast } from '~/hooks';

import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

type CreateUserProps = {
  createUserLoading: boolean;
  createUserMutate: UseMutateFunction<void, unknown, UserForm, unknown>;
};

export const useCreateUser = (): CreateUserProps => {
  const { showSuccessToast, showErrorToast } = useCustomToast();
  const navigate = useNavigate();

  const { mutate: createUserMutate, isLoading: createUserLoading } = useMutation({
    mutationFn: createUser,
    onError: (error) => {
      if (error instanceof AxiosError) {
        return showErrorToast({
          title: 'CPF, email ou login já cadastrados',
          description: 'Verifique os dados e tente novamente.',
        });
      }

      showErrorToast({
        title: 'Erro ao criar usuário',
        description: 'Tente novamente mais tarde.',
      });
    },
    onSuccess: () => {
      showSuccessToast({
        title: 'Usuário criado com sucesso!',
        description: 'Cheque a lista de usuários para ver o novo usuário.',
      });

      queryClient.invalidateQueries(['users']);
      navigate('/usuarios');
    },
  });
  return { createUserMutate, createUserLoading };
};
