import { Button, Flex, Grid } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { CreateUserSchemaProps, createUserSchema } from '../schema';
import { Masks } from '~/utils/mask';
import { ScrollbarStyle } from '~/styles';
import { useCreateUser } from '../api/hooks';
import { translateTextToStatus } from '../utils';
import { TextInput } from '~/components';

export const CreateUserForm = (): JSX.Element => {
  const { createUserMutate, createUserLoading } = useCreateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchemaProps>({
    reValidateMode: 'onChange',
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const formattedDate = new Date(data.birthDate).toISOString();

    createUserMutate({
      ...data,
      status: translateTextToStatus(data.status),
      birthDate: formattedDate,
    });
  });

  return (
    <Flex
      onSubmit={onSubmit}
      direction='column'
      as='form'
      overflowY='auto'
      sx={{ ...ScrollbarStyle }}
    >
      <Grid templateColumns='repeat(3, 1fr)' gap='1.5rem' h='80%'>
        <TextInput
          label='Nome'
          bg='secondary.200'
          color='white.100'
          labelProps={{ color: 'white' }}
          register={register('name')}
          py='2.2rem'
          errorMessage={errors.name?.message}
        />
        <TextInput
          label='Email'
          bg='secondary.200'
          color='white.100'
          labelProps={{ color: 'white' }}
          register={register('email')}
          py='2.2rem'
          errorMessage={errors.email?.message}
        />
        <TextInput
          label='Login'
          bg='secondary.200'
          color='white.100'
          labelProps={{ color: 'white' }}
          register={register('login')}
          py='2.2rem'
          errorMessage={errors.login?.message}
        />
        <TextInput
          label='Senha'
          bg='secondary.200'
          color='white.100'
          labelProps={{ color: 'white' }}
          register={register('password')}
          py='2.2rem'
          errorMessage={errors.password?.message}
          type='password'
        />
        <TextInput
          label='Telefone'
          bg='secondary.200'
          color='white.100'
          labelProps={{ color: 'white' }}
          register={register('phone')}
          py='2.2rem'
          errorMessage={errors.phone?.message}
          maskFormatFunction={Masks.formatPhone}
        />
        <TextInput
          label='Data de nascimento'
          bg='secondary.200'
          color='white.100'
          labelProps={{ color: 'white' }}
          register={register('birthDate')}
          py='2.2rem'
          errorMessage={errors.birthDate?.message}
          type='date'
        />
        <TextInput
          label='Status'
          bg='secondary.200'
          color='white.100'
          labelProps={{ color: 'white' }}
          register={register('status')}
          py='2.2rem'
          errorMessage={errors.status?.message}
        />
        <TextInput
          label='CPF'
          bg='secondary.200'
          color='white.100'
          labelProps={{ color: 'white' }}
          register={register('cpf')}
          py='2.2rem'
          errorMessage={errors.cpf?.message}
          maskFormatFunction={Masks.formatCPF}
        />
        <TextInput
          label='Nome da mãe'
          bg='secondary.200'
          color='white.100'
          labelProps={{ color: 'white' }}
          register={register('motherName')}
          py='2.2rem'
          errorMessage={errors.motherName?.message}
        />
      </Grid>
      <Button
        type='submit'
        color='white'
        bg='secondary.50'
        w='100%'
        py='2.2rem'
        fontSize='xl'
        mt='1.5rem'
        _hover={{ bg: 'primary.50' }}
        _focus={{}}
        isLoading={createUserLoading}
      >
        Criar usuário
      </Button>
    </Flex>
  );
};
