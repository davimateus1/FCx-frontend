import { Flex } from '@chakra-ui/react';
import { LoginHeader } from './LoginHeader';

export const LoginRightContent = (): JSX.Element => {
  return (
    <Flex h='100%' w='45%' direction='column' align='center' p='2.4rem 3.6rem'>
      <LoginHeader />
    </Flex>
  );
};
