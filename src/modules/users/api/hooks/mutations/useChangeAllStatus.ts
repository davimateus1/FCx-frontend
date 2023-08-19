import { UseMutateFunction, useMutation } from '@tanstack/react-query';

import { useCustomToast } from '~/hooks';
import { changeAllStatus } from '../../requests';
import { queryClient } from '~/lib/react-query';

type ChangeAllStatusReturn = {
  changeAllStatusLoading: boolean;
  changeAllStatusMutate: UseMutateFunction<void, unknown>;
};

export const useChangeAllStatus = (): ChangeAllStatusReturn => {
  const { showSuccessToast, showErrorToast } = useCustomToast();

  const { mutate: changeAllStatusMutate, isLoading: changeAllStatusLoading } = useMutation({
    mutationFn: changeAllStatus,
    onError: () => {
      showErrorToast({
        title: 'Erro ao realizar a ação',
        description: 'Tente novamente mais tarde.',
      });
    },
    onSuccess: () => {
      showSuccessToast({
        title: 'Ação realizada com sucesso!',
        description: 'Todos os usuários foram inativados.',
      });
      queryClient.invalidateQueries(['users']);
    },
  });

  return { changeAllStatusLoading, changeAllStatusMutate };
};
