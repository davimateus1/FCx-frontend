import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import FcxLogo from '~/assets/fcx-logo.webp';

export const LoginHeader = (): JSX.Element => {
  return (
    <Flex direction='column' align='center'>
      <Image src={FcxLogo} alt='login-image' w='40%' h='60%' />
      <Flex direction='column' align='center' gap='1.5rem'>
        <Heading color='white' opacity={0.9} fontWeight='500'>
          Entrar
        </Heading>
        <Text textAlign='center' color='white' opacity={0.6}>
          Entre com seu login e senha para acessar a plataforma e gerenciar seus usuários.
        </Text>
      </Flex>
    </Flex>
  );
};
