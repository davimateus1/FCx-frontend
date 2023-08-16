import { Flex } from '@chakra-ui/react';
import { LoginLeftContent } from './LoginLeftContent';
import { LoginRightContent } from './LoginRightContent';

export const LoginContent = (): JSX.Element => {
  return (
    <Flex
      w='70%'
      minH='80%'
      h='auto'
      borderRadius='2xl'
      bg='white.0'
      zIndex={1}
      border='0.2rem solid'
      borderColor='primary.0'
    >
      <LoginLeftContent />
      <LoginRightContent />
    </Flex>
  );
};
