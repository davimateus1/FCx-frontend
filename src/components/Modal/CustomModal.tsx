import {
  Button,
  Flex,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';
import { UserStatus } from '~/types';

type CustomModalProps = {
  title: string;
  description: string;
  cancelText?: string;
  confirmText: string;
  actionFunction: () => void;
  isLoading: boolean;
  children: ReactNode;
  status?: UserStatus;
};

export const CustomModal = ({
  title,
  description,
  cancelText = 'Cancelar',
  confirmText,
  actionFunction,
  isLoading,
  children,
  status,
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
          <ModalFooter mt='1rem'>
            <Flex justify='space-between' w='100%'>
              <Button
                onClick={onClose}
                w='20rem'
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
                w='20rem'
                h='4rem'
                fontSize='md'
                isLoading={isLoading}
                bgColor='secondary.50'
                color='white'
                _hover={{}}
              >
                {confirmText}
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
