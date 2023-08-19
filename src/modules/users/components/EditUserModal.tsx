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
  } = useForm<EditUserSchemaProps>({
    reValidateMode: 'onChange',
    resolver: zodResolver(editUserSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Button onClick={onOpen} cursor='pointer' bg='none' _hover={{}} _active={{}}>
        <Icon as={LuEdit2} color='primary.100' fontSize='3xl' />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
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
              onClick={onClose}
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
                errorMessage={errors.name?.message}
                defaultValue={user?.name}
              />
              <TextInput
                label='Login'
                bg='secondary.300'
                color='primary.0'
                register={register('login')}
                errorMessage={errors.login?.message}
              />
              <TextInput
                label='Idade'
                bg='secondary.300'
                color='primary.0'
                register={register('age')}
                errorMessage={errors.age?.message}
              />
              <TextInput
                label='Telefone'
                bg='secondary.300'
                color='primary.0'
                register={register('phone')}
                errorMessage={errors.phone?.message}
              />
              <TextInput
                label='Data de nascimento'
                bg='secondary.300'
                color='primary.0'
                register={register('birthDate')}
                errorMessage={errors.birthDate?.message}
              />
              <TextInput
                label='Status'
                bg='secondary.300'
                color='primary.0'
                register={register('status')}
                errorMessage={errors.status?.message}
              />
              <TextInput
                label='CPF'
                bg='secondary.300'
                color='primary.0'
                register={register('cpf')}
                errorMessage={errors.cpf?.message}
              />
              <TextInput
                label='Nome da mãe'
                bg='secondary.300'
                color='primary.0'
                register={register('motherName')}
                errorMessage={errors.motherName?.message}
              />
            </Grid>
          </ModalBody>
          <FooterModal onClose={onClose} isLoading={false} confirmText='Salvar' type='submit' />
        </ModalContent>
      </Modal>
    </>
  );
};
