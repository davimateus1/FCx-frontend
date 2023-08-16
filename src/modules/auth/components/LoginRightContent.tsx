import { Fade, Flex } from '@chakra-ui/react';
import { LoginHeader } from './LoginHeader';
import { LoginForm } from './LoginForm';

export const LoginRightContent = (): JSX.Element => {
  return (
    <Flex h='100%' w='45%' direction='column' align='center' p='2.4rem 3.6rem'>
      <Fade style={{ width: '100%', height: '100%' }} in={true}>
        <LoginHeader />
        <LoginForm />
      </Fade>
    </Flex>
  );
};
