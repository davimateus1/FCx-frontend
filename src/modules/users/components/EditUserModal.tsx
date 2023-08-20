import {
  Button,
  Grid,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { useGetUser, useUpdateUser } from '../api/hooks';
import { IoMdClose } from 'react-icons/io';
import { LuEdit2 } from 'react-icons/lu';

import { TextInput, FooterModal } from '~/components';
import { useForm } from 'react-hook-form';
import { EditUserSchemaProps, editUserSchema } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { translateStatusToText, translateTextToStatus } from '../utils';
import { Masks } from '~/utils/mask';

type EditUserModalProps = {
  id: number;
};

export const EditUserModal = ({ id }: EditUserModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: user } = useGetUser({ id });
  const { updateUserMutate, updateUserLoading } = useUpdateUser();

  const formattedDate = user?.birthDate.split('T')[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditUserSchemaProps>({
    reValidateMode: 'onChange',
    resolver: zodResolver(editUserSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const status = translateTextToStatus(data.status);
    const birthDate = new Date(data.birthDate).toISOString();

    updateUserMutate({
      id,
      data: { ...data, status, birthDate },
    });
  });

  const onCloseModal = () => {
    reset();
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} cursor='pointer' bg='none' _hover={{}} _active={{}}>
        <Icon as={LuEdit2} color='primary.100' fontSize='3xl' />
      </Button>

      <Modal onClose={onCloseModal} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg='white' borderRadius='xl' p='1rem' minW='60%' minH='40%'>
          <ModalHeader display='flex' justifyContent='space-between'>
            <Heading fontSize='4xl' fontWeight='bold'>
              Editar usuário
            </Heading>
            <Icon
              as={IoMdClose}
              color='primary.50'
              fontSize='3xl'
              onClick={onCloseModal}
              cursor='pointer'
            />
          </ModalHeader>

          <ModalBody>
            <form onSubmit={onSubmit}>
              <Grid templateColumns='repeat(3, 1fr)' gap='1rem'>
                <TextInput
                  label='Nome'
                  bg='secondary.300'
                  color='primary.0'
                  register={register('name')}
                  defaultValue={user?.name}
                  errorMessage={errors.name?.message}
                />
                <TextInput
                  label='Email'
                  bg='secondary.300'
                  color='primary.0'
                  register={register('email')}
                  defaultValue={user?.email}
                  errorMessage={errors.email?.message}
                />
                <TextInput
                  label='Login'
                  bg='secondary.300'
                  color='primary.0'
                  register={register('login')}
                  defaultValue={user?.login}
                  errorMessage={errors.login?.message}
                />
                <TextInput
                  label='Idade'
                  bg='secondary.300'
                  color='primary.0'
                  defaultValue={user?.age}
                  isReadOnly
                  _readOnly={{ cursor: 'not-allowed' }}
                />
                <TextInput
                  label='Telefone'
                  bg='secondary.300'
                  color='primary.0'
                  register={register('phone')}
                  defaultValue={user?.phone}
                  errorMessage={errors.phone?.message}
                  maskFormatFunction={Masks.formatPhone}
                />
                <TextInput
                  label='Data de nascimento'
                  bg='secondary.300'
                  color='primary.0'
                  register={register('birthDate')}
                  defaultValue={formattedDate}
                  errorMessage={errors.birthDate?.message}
                  type='date'
                />
                <TextInput
                  label='Status'
                  bg='secondary.300'
                  color='primary.0'
                  register={register('status')}
                  defaultValue={translateStatusToText(user?.status)}
                  errorMessage={errors.status?.message}
                />
                <TextInput
                  label='CPF'
                  bg='secondary.300'
                  color='primary.0'
                  register={register('cpf')}
                  defaultValue={user?.cpf}
                  errorMessage={errors.cpf?.message}
                  maskFormatFunction={Masks.formatCPF}
                />
                <TextInput
                  label='Nome da mãe'
                  bg='secondary.300'
                  color='primary.0'
                  register={register('motherName')}
                  defaultValue={user?.motherName}
                  errorMessage={errors.motherName?.message}
                />
              </Grid>
              <FooterModal
                confirmText='Salvar'
                isLoading={updateUserLoading}
                onClose={onCloseModal}
                type='submit'
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
