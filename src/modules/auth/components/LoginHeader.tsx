import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import FcxLogo from '~/assets/fcx-logo.webp';

export const LoginHeader = (): JSX.Element => {
  return (
    <Flex direction='column' align='center'>
      <Image src={FcxLogo} alt='login-image' w='11rem' h='11rem' />
      <Flex direction='column' align='center' gap='1.2rem'>
        <Heading color='white' opacity={0.9} fontWeight='500' fontSize='3xl'>
          Entrar
        </Heading>
        <Text textAlign='center' color='white' opacity={0.6} fontSize='md'>
          Entre com seu login e senha para acessar a plataforma e gerenciar seus usuários.
        </Text>
      </Flex>
    </Flex>
  );
};
