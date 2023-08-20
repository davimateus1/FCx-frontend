import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { UserForm } from '~/types';
import { updateUser } from '../../requests';
import { queryClient } from '~/lib/react-query';
import { useCustomToast } from '~/hooks';
import { AxiosError } from 'axios';

type UpdateUserProps = {
  updateUserLoading: boolean;
  updateUserMutate: UseMutateFunction<void, unknown, { id: number; data: UserForm }, unknown>;
};

export const useUpdateUser = (): UpdateUserProps => {
  const { showSuccessToast, showErrorToast } = useCustomToast();

  const { mutate: updateUserMutate, isLoading: updateUserLoading } = useMutation({
    mutationFn: updateUser,
    onError: (error) => {
      if (error instanceof AxiosError) {
        return showErrorToast({
          title: 'CPF, email ou login já cadastrados',
          description: 'Verifique os dados e tente novamente.',
        });
      }

      showErrorToast({
        title: 'Erro ao editar o usuário',
        description: 'Tente novamente mais tarde.',
      });
    },
    onSuccess: () => {
      showSuccessToast({
        title: 'Usuário editado com sucesso!',
        description: 'Cheque a lista de usuários para ver as alterações.',
      });
      queryClient.invalidateQueries(['users']);
    },
  });
  return { updateUserMutate, updateUserLoading };
};
