import { Button, Flex, ModalFooter } from '@chakra-ui/react';

type FooterModalProps = {
  onClose: () => void;
  handleAction?: () => void;
  isLoading: boolean;
  cancelText?: string;
  confirmText: string;
  type?: 'button' | 'submit';
};

export const FooterModal = ({
  onClose,
  handleAction,
  isLoading,
  cancelText = 'Cancelar',
  confirmText,
  type = 'button',
}: FooterModalProps) => {
  return (
    <ModalFooter mt='1rem'>
      <Flex justify='space-between' w='100%'>
        <Button
          onClick={onClose}
          w='49.5%'
          h='4rem'
          fontSize='md'
          bgColor='black.50'
          color='white'
          _hover={{}}
        >
          {cancelText}
        </Button>
        <Button
          onClick={handleAction}
          w='49.5%'
          h='4rem'
          fontSize='md'
          isLoading={isLoading}
          bgColor='secondary.50'
          color='white'
          _hover={{}}
          type={type}
        >
          {confirmText}
        </Button>
      </Flex>
    </ModalFooter>
  );
};
