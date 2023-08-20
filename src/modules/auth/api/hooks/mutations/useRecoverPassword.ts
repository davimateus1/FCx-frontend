import { UseMutateFunction, useMutation } from '@tanstack/react-query';

import { recoverPassword } from '../../requests';

import { queryClient } from '~/lib/react-query';
import { useCustomToast } from '~/hooks';

import { useNavigate } from 'react-router-dom';
import { RecoverParams } from '../../types';

type RecoverPasswordProps = {
  recoverPasswordLoading: boolean;
  recoverPasswordMutate: UseMutateFunction<void, unknown, RecoverParams, unknown>;
};

export const useRecoverPassword = (): RecoverPasswordProps => {
  const { showSuccessToast, showErrorToast } = useCustomToast();
  const navigate = useNavigate();

  const { mutate: recoverPasswordMutate, isLoading: recoverPasswordLoading } = useMutation({
    mutationFn: recoverPassword,
    onError: () => {
      showErrorToast({
        title: 'Erro ao recuperar senha',
        description: 'Tente novamente mais tarde.',
      });
    },
    onSuccess: () => {
      showSuccessToast({
        title: 'Senha recuperada com sucesso',
        description: 'Você será redirecionado para a tela de login.',
      });

      queryClient.invalidateQueries(['users']);
      navigate('/login');
    },
  });
  return { recoverPasswordMutate, recoverPasswordLoading };
};
