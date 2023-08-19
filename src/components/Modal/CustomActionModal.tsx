import {
  Button,
  ButtonProps,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';
import { UserStatus } from '~/types';
import { FooterModal } from './FooterModal';

type CustomModalProps = {
  title: string;
  description: string;
  cancelText?: string;
  confirmText: string;
  actionFunction: () => void;
  isLoading: boolean;
  children: ReactNode;
  status?: UserStatus;
} & ButtonProps;

export const CustomActionModal = ({
  title,
  description,
  cancelText = 'Cancelar',
  confirmText,
  actionFunction,
  isLoading,
  children,
  status,
  ...buttonProps
}: CustomModalProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAction = () => {
    actionFunction();
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        cursor='pointer'
        bg='none'
        _hover={{}}
        _active={{}}
        isDisabled={status === UserStatus.BLOCKED}
        _disabled={{ cursor: 'not-allowed', opacity: '0.5' }}
        {...buttonProps}
      >
        {children}
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg='white' borderRadius='xl' p='1rem' minW='50rem'>
          <ModalHeader display='flex' justifyContent='space-between'>
            <Heading fontSize='4xl' fontWeight='bold'>
              {title}
            </Heading>
            <Icon
              as={IoMdClose}
              color='primary.50'
              fontSize='3xl'
              onClick={onClose}
              cursor='pointer'
            />
          </ModalHeader>

          <ModalBody>
            <Text maxW='85%'>{description}</Text>
          </ModalBody>
          <FooterModal
            onClose={onClose}
            confirmText={confirmText}
            handleAction={handleAction}
            isLoading={isLoading}
            cancelText={cancelText}
          />
        </ModalContent>
      </Modal>
    </>
  );
};
