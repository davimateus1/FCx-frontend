import { Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineUser } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { GoNumber } from 'react-icons/go';
import { PiUserFocusThin } from 'react-icons/pi';

import FcxLogo from '~/assets/fcx-logo.webp';
import { PasswordInput, TextInput } from '~/components';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RecoverFormProps, recoverSchema } from '../schemas';
import { Masks } from '~/utils/mask';
import { useRecoverPassword } from '../api/hooks';

export const RecoverContent = (): JSX.Element => {
  const navigate = useNavigate();
  const { recoverPasswordMutate, recoverPasswordLoading } = useRecoverPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverFormProps>({
    reValidateMode: 'onChange',
    resolver: zodResolver(recoverSchema),
  });

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  const onSubmit = handleSubmit((data) => {
    recoverPasswordMutate(data);
  });

  return (
    <Flex
      w='40%'
      minH='80%'
      h='auto'
      borderRadius='2xl'
      bg='white.0'
      zIndex={1}
      border='0.2rem solid'
      borderColor='primary.0'
      direction='column'
      p='3rem'
      align='center'
    >
      <Icon
        as={IoIosArrowBack}
        color='white'
        fontSize='2.4rem'
        alignSelf='flex-start'
        onClick={handleNavigateToLogin}
        cursor='pointer'
      />
      <Image src={FcxLogo} alt='login-image' w='8rem' h='8rem' />
      <Flex direction='column' align='center' gap='1.2rem'>
        <Heading color='white' opacity={0.9} fontWeight='500' fontSize='3xl'>
          Recuperar senha
        </Heading>
        <Text textAlign='center' color='white' opacity={0.6} fontSize='md'>
          Insira seu email, login e CPF para recuperar sua senha.
        </Text>
      </Flex>
      <Flex direction='column' w='100%' gap='1rem' mt='2rem' as='form' onSubmit={onSubmit}>
        <TextInput
          leftElement={<Icon as={AiOutlineUser} boxSize='2rem' color='primary.100' />}
          placeholder='Email'
          _placeholder={{ color: 'gray.300' }}
          register={register('email')}
          errorMessage={errors.email?.message}
        />
        <TextInput
          leftElement={<Icon as={PiUserFocusThin} boxSize='2rem' color='primary.100' />}
          placeholder='Login'
          _placeholder={{ color: 'gray.300' }}
          register={register('login')}
          errorMessage={errors.login?.message}
        />
        <TextInput
          leftElement={<Icon as={GoNumber} boxSize='2rem' color='primary.100' />}
          placeholder='CPF'
          _placeholder={{ color: 'gray.300' }}
          register={register('cpf')}
          errorMessage={errors.cpf?.message}
          maskFormatFunction={Masks.formatCPF}
        />
        <PasswordInput
          placeholder='Nova senha'
          _placeholder={{ color: 'gray.300' }}
          {...register('password')}
          errorMessage={errors.password?.message}
        />
        <Button
          type='submit'
          color='white'
          bg='secondary.50'
          py='2.2rem'
          fontSize='xl'
          mt='1.5rem'
          _hover={{ bg: 'primary.50' }}
          _focus={{}}
          isLoading={recoverPasswordLoading}
        >
          Criar usuário
        </Button>
      </Flex>
    </Flex>
  );
};
