import { Button, Flex, Icon, Text } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormProps, loginSchema } from '../schemas';
import { PasswordInput, TextInput } from '~/components';
import { useLogin } from '../api/hooks';
import { useAuthContext } from '../context';

export const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { mutateAsync: userMutate, isLoading } = useLogin();
  const { handleSetResponse } = useAuthContext();

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

  const onSubmitLoginForm = async (data: LoginFormProps) => {
    const response = await userMutate(data);
    console.log(response.token);
    handleSetResponse({
      token: response.token,
      userAuth: response.user,
    });
  };

  return (
    <Flex as='form' w='100%' onSubmit={handleSubmit(onSubmitLoginForm)}>
      <Flex direction='column' alignItems='flex-start' mt='1rem' gap='1.5rem' w='100%'>
        <TextInput
          leftElement={<Icon as={AiOutlineUser} boxSize='2rem' color='primary.100' />}
          placeholder='Login'
          _placeholder={{ color: 'gray.300' }}
          errorMessage={errors?.login?.message}
          register={register('login')}
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
          isLoading={isLoading}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};
