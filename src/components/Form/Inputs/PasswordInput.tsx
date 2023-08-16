import { IconButton, Input, InputProps, Icon, InputGroupProps } from '@chakra-ui/react';

import { Ref, forwardRef, useState } from 'react';
import { AiFillLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { FormGroup } from '../FormGroup';

import { InputGroupWrapper, InputGroupWrapperProps } from './InputGroupWrapper';

export type PasswordInputProps = {
  leftElement?: InputGroupWrapperProps['leftElement'];
  errorMessage?: string;
  inputGroupWrapperProps?: InputGroupProps;
} & InputProps;

export const PasswordInput = forwardRef(
  (
    { errorMessage, inputGroupWrapperProps, ...rest }: PasswordInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [show, setShow] = useState(false);

    return (
      <FormGroup w='100%' errorMessage={errorMessage}>
        <InputGroupWrapper
          leftElement={<Icon as={AiFillLock} fontSize='2xl' color='primary.100' opacity={0.7} />}
          rightElement={
            <IconButton
              h='100%'
              onClick={() => setShow((x) => !x)}
              aria-label={show ? 'Hide password' : 'Show password'}
              color='white'
              _focus={{}}
              _selected={{}}
              _hover={{}}
              _focusVisible={{}}
              icon={
                show ? <AiOutlineEye fontSize='2rem' /> : <AiOutlineEyeInvisible fontSize='2rem' />
              }
              variant='unstyled'
            />
          }
          {...inputGroupWrapperProps}
        >
          <Input
            ref={ref}
            type={show ? 'text' : 'password'}
            background='transparent'
            color='white'
            borderRadius='xl'
            border='0.1rem solid white'
            paddingY='2.5rem'
            fontSize='lg'
            fontWeight='400'
            width='full'
            pl='4rem'
            {...rest}
          />
        </InputGroupWrapper>
      </FormGroup>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
