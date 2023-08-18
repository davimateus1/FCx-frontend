import { UseMutateFunction, useMutation } from '@tanstack/react-query';

import { useCustomToast } from '~/hooks';
import { changeUserStatus } from '../../requests';
import { queryClient } from '~/lib/react-query';
import { ChangeStatusParams } from '../../types';

type ChangeStatusReturn = {
  changeStatusLoading: boolean;
  changeStatusMutate: UseMutateFunction<void, unknown, ChangeStatusParams, unknown>;
};

export const useChangeStatus = (): ChangeStatusReturn => {
  const { showSuccessToast, showErrorToast } = useCustomToast();

  const { mutate: changeStatusMutate, isLoading: changeStatusLoading } = useMutation({
    mutationFn: changeUserStatus,
    onError: () => {
      showErrorToast({
        title: 'Erro ao realizar a ação',
        description: 'Tente novamente mais tarde.',
      });
    },
    onSuccess: () => {
      showSuccessToast({
        title: 'Ação realizada com sucesso!',
        description: 'O status do usuário foi alterado.',
      });
      queryClient.invalidateQueries(['users']);
    },
  });
  return { changeStatusLoading, changeStatusMutate };
};
