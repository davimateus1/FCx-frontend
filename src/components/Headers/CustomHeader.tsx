import { Flex, FlexProps, Heading, Icon, InputProps, Spacer } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { Dispatch, ReactNode, SetStateAction } from 'react';

import { TextInput } from '../Form';
import { FiSearch } from 'react-icons/fi';

type CustomHeaderProps = {
  haveInput?: boolean;
  LeftIcon?: ReactNode;
  title?: string;
  children?: JSX.Element;
  setSearch?: Dispatch<SetStateAction<string>>;
  inputProps?: InputProps;
} & FlexProps;

export const CustomHeader = ({
  LeftIcon,
  title,
  children,
  setSearch,
  inputProps,
  ...rest
}: CustomHeaderProps): JSX.Element => {
  const debouncedSearch = setSearch && debounce(setSearch, 500);

  return (
    <Flex w='100%' h='7rem' align='center' justify='space-between' {...rest}>
      <Flex align='center' w='50%'>
        {LeftIcon && LeftIcon}
        <Heading
          fontSize='4xl'
          ml={LeftIcon ? '2rem' : 'unset'}
          fontWeight={500}
          color='primary.100'
        >
          {title}
        </Heading>
      </Flex>
      <Spacer />
      {debouncedSearch && (
        <Flex align='center' justify='flex-end'>
          <TextInput
            bg='black.0'
            w='35rem'
            h='4.5rem'
            borderRadius='3xl'
            border='transparent'
            leftElement={<Icon as={FiSearch} color='white' />}
            onChange={(e) => debouncedSearch(e.target.value)}
            {...inputProps}
          />
        </Flex>
      )}
      {children}
    </Flex>
  );
};
