import { Flex } from '@chakra-ui/react';
import { LoginLeftContent } from './LoginLeftContent';
import { LoginRightContent } from './LoginRightContent';

export const LoginContent = (): JSX.Element => {
  return (
    <Flex
      w='70%'
      h='80%'
      borderRadius='2xl'
      bg='white.0'
      zIndex={1}
      border='3px solid'
      borderColor='primary.0'
    >
      <LoginLeftContent />
      <LoginRightContent />
    </Flex>
  );
};
