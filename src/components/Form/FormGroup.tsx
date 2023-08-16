import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  SlideFade,
  FormControlProps,
  Text,
  Box,
  TextProps,
} from '@chakra-ui/react';

import { ReactNode } from 'react';

export type FormGroupProps = Omit<FormControlProps, 'onChange' | 'defaultValue' | 'label'> & {
  children?: ReactNode;
  errorMessage?: string;
  label?: ReactNode;
  errorMessageProps?: TextProps;
};

export const FormGroup = ({
  children,
  errorMessage,
  label,
  errorMessageProps,
  ...rest
}: FormGroupProps) => (
  <FormControl isInvalid={!!errorMessage} width='fit-content' {...rest}>
    {!!label && <FormLabel>{label}</FormLabel>}
    {children}

    {errorMessage && (
      <FormErrorMessage>
        <SlideFade in offsetY={-6}>
          <Box display='flex'>
            <Text fontSize='md' color='primary.50' fontWeight={400} {...errorMessageProps}>
              {errorMessage}
            </Text>
          </Box>
        </SlideFade>
      </FormErrorMessage>
    )}
  </FormControl>
);
