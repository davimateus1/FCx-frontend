import { InputGroup, InputGroupProps, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type InputGroupWrapperProps = InputGroupProps & {
  children: ReactNode;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

export const InputGroupWrapper = ({
  children,
  leftElement,
  rightElement,
  ...rest
}: InputGroupWrapperProps) => {
  return (
    <InputGroup {...rest}>
      {leftElement && (
        <InputLeftElement color='white' fontSize='lg' h='100%' left='0.5rem'>
          {leftElement}
        </InputLeftElement>
      )}
      {children}
      {rightElement && (
        <InputRightElement h='100%' color='white' fontSize='lg' right='1.5rem'>
          {rightElement}
        </InputRightElement>
      )}
    </InputGroup>
  );
};
