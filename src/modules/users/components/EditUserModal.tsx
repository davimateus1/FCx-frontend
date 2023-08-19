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

import { useGetUser } from '../api/hooks';
import { IoMdClose } from 'react-icons/io';
import { LuEdit2 } from 'react-icons/lu';

import { TextInput, FooterModal } from '~/components';
import { useForm } from 'react-hook-form';
import { EditUserSchemaProps, editUserSchema } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { translateStatus } from '../utils';

type EditUserModalProps = {
  id: number;
};

export const EditUserModal = ({ id }: EditUserModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: user } = useGetUser({ id });

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
    console.log(data);
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
        <ModalContent
          bg='white'
          borderRadius='xl'
          p='1rem'
          minW='60%'
          minH='60%'
          as='form'
          onSubmit={onSubmit}
        >
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
            <Grid templateColumns='repeat(2, 1fr)' gap='1rem'>
              <TextInput
                label='Nome'
                bg='secondary.300'
                color='primary.0'
                register={register('name')}
                defaultValue={user?.name}
                errorMessage={errors.name?.message}
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
                register={register('age')}
                defaultValue={user?.age}
                errorMessage={errors.age?.message}
                type='number'
              />
              <TextInput
                label='Telefone'
                bg='secondary.300'
                color='primary.0'
                register={register('phone')}
                defaultValue={user?.phone}
                errorMessage={errors.phone?.message}
              />
              <TextInput
                label='Data de nascimento'
                bg='secondary.300'
                color='primary.0'
                register={register('birthDate')}
                defaultValue={user?.birthDate}
                errorMessage={errors.birthDate?.message}
              />
              <TextInput
                label='Status'
                bg='secondary.300'
                color='primary.0'
                register={register('status')}
                defaultValue={translateStatus(user?.status)}
                errorMessage={errors.status?.message}
              />
              <TextInput
                label='CPF'
                bg='secondary.300'
                color='primary.0'
                register={register('cpf')}
                defaultValue={user?.cpf}
                errorMessage={errors.cpf?.message}
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
          </ModalBody>
          <FooterModal
            onClose={onCloseModal}
            isLoading={false}
            confirmText='Salvar'
            type='submit'
          />
        </ModalContent>
      </Modal>
    </>
  );
};
