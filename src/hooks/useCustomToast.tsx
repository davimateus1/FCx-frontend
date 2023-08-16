import { useToast } from '@chakra-ui/react';

type ShowToastProps = {
  title: string;
  status: 'success' | 'error' | 'warning' | 'info';
  duration: number;
  description?: string;
};

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = ({ title, status, duration, description }: ShowToastProps) => {
    toast({
      title,
      status,
      duration,
      isClosable: true,
      description,
    });
  };

  const showSuccessToast = ({
    title,
    description,
  }: Pick<ShowToastProps, 'title' | 'description'>) => {
    showToast({ title, description, status: 'success', duration: 3000 });
  };

  const showWarningToast = ({
    title,
    description,
  }: Pick<ShowToastProps, 'title' | 'description'>) => {
    showToast({ title, description, status: 'warning', duration: 3000 });
  };

  const showErrorToast = ({
    title,
    description,
  }: Pick<ShowToastProps, 'title' | 'description'>) => {
    showToast({ title, description, status: 'error', duration: 3000 });
  };

  const showInfoToast = ({ title, description }: Pick<ShowToastProps, 'title' | 'description'>) => {
    showToast({ title, description, status: 'info', duration: 3000 });
  };

  return {
    showSuccessToast,
    showWarningToast,
    showErrorToast,
    showInfoToast,
  };
};
