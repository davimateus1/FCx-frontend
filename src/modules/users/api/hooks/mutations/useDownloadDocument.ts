import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '~/api';
import { useCustomToast } from '~/hooks';

export const useDownloadDocument = () => {
  const { showErrorToast, showSuccessToast } = useCustomToast();

  const downloadDocument = async (docType: string) => {
    const { baseURL } = axiosInstance.defaults;
    window.open(`${baseURL}/users-documents/${docType}`);
  };

  const { mutateAsync } = useMutation(downloadDocument, {
    onSuccess: () => {
      showSuccessToast({
        title: 'Documento baixado com sucesso',
        description: 'Ele estará disponível na sua pasta de downloads!',
      });
    },
    onError: () => {
      showErrorToast({
        title: 'Erro ao baixar o documento',
        description: 'Tente novamente mais tarde.',
      });
    },
  });

  return { mutateAsync };
};
