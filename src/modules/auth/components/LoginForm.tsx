import { Button, Flex, Icon, Text } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormProps, loginSchema } from '../schemas';
import { PasswordInput, TextInput } from '~/components';

export const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormProps>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const handleGoToRecoverPassword = () => {
    navigate('/recuperar-senha');
  };

  const onSubmitLoginForm = (data: LoginFormProps) => {
    console.log(data);
  };

  return (
    <Flex as='form' w='100%' onSubmit={handleSubmit(onSubmitLoginForm)}>
      <Flex direction='column' alignItems='flex-start' mt='1rem' gap='1.5rem' w='100%'>
        <TextInput
          leftElement={<Icon as={AiOutlineUser} boxSize='2rem' color='primary.100' />}
          placeholder='Username'
          _placeholder={{ color: 'gray.300' }}
          errorMessage={errors?.username?.message}
          register={register('username')}
        />
        <PasswordInput
          placeholder='Senha'
          _placeholder={{ color: 'gray.300' }}
          errorMessage={errors?.password?.message}
          {...register('password')}
        />
        <Text
          cursor='pointer'
          textDecoration='underline'
          fontSize='lg'
          color='secondary.100'
          onClick={handleGoToRecoverPassword}
        >
          Esqueceu sua senha?
        </Text>
        <Button
          color='white'
          borderRadius='xl'
          bg='primary.100'
          _hover={{ bg: 'secondary.100' }}
          type='submit'
          w='100%'
          py='2.5rem'
          fontSize='lg'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};
