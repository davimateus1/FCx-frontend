import { Flex, Input, InputProps, Text } from '@chakra-ui/react';

import { UseFormRegisterReturn } from 'react-hook-form';

import { FormGroup } from '../FormGroup';

import { InputGroupWrapper, InputGroupWrapperProps } from './InputGroupWrapper';

export type TextInputProps = {
  rightElement?: InputGroupWrapperProps['rightElement'];
  leftElement?: InputGroupWrapperProps['leftElement'];
  maskFormatFunction?: (value: string) => string;
  register?: UseFormRegisterReturn<string>;
  errorMessage?: string;
  label?: string;
} & InputProps;

export const TextInput = ({
  rightElement = '',
  leftElement = '',
  errorMessage,
  label,
  register,
  maskFormatFunction,
  ...rest
}: TextInputProps) => {
  return (
    <FormGroup w='100%' errorMessage={errorMessage}>
      <InputGroupWrapper rightElement={rightElement} leftElement={leftElement}>
        <Flex direction='column' w='100%'>
          {label && (
            <Text fontSize='sm' fontWeight='400' mb='0.6rem'>
              {label}
            </Text>
          )}
          <Input
            background='transparent'
            color='white'
            borderRadius='xl'
            border='0.1rem solid white'
            paddingY='2.5rem'
            fontSize='lg'
            fontWeight='400'
            width='full'
            paddingLeft={leftElement ? '4rem' : '2.5rem'}
            _placeholder={{ color: 'gray.60' }}
            {...register}
            {...(maskFormatFunction && {
              onChange: (event) => {
                event.currentTarget.value = maskFormatFunction(event.currentTarget.value);
              },
            })}
            {...rest}
          />
        </Flex>
      </InputGroupWrapper>
    </FormGroup>
  );
};
