import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

type TablePaginationProps = {
  actualPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  pageCount: number;
} & FlexProps;

export const TablePagination = ({
  actualPage,
  setPage,
  pageCount,
  ...rest
}: TablePaginationProps): JSX.Element => {
  const initialPage = 1;
  const isInitialPage = actualPage === initialPage;
  const isLastPage = actualPage === pageCount;

  return (
    <Flex background='transparent' borderRadius='md' w='100%' justifyContent='flex-end' {...rest}>
      <Flex justifyContent='space-between' m={4} mb={0} mr={2} alignItems='center'>
        <Text mx={3}>
          Mostrando
          <Text mx='4px' fontWeight='bold' as='span'>
            {pageCount === 0 ? 0 : actualPage}
          </Text>
          de
          <Text ml='4px' fontWeight='bold' as='span'>
            {pageCount}
          </Text>
        </Text>
        <Flex>
          <Button
            fontSize='2xl'
            color='white'
            w='auto'
            bg='none'
            alignItems='center'
            alignSelf='center'
            _hover={{}}
            _focus={{}}
            _active={{}}
            onClick={() => setPage(actualPage - 1)}
            isDisabled={isInitialPage}
          >
            <IoIosArrowDropleftCircle />
          </Button>
          <Button
            fontSize='2xl'
            color='white'
            w='auto'
            bg='none'
            alignItems='center'
            alignSelf='center'
            _hover={{}}
            _focus={{}}
            _active={{}}
            onClick={() => setPage(actualPage + 1)}
            isDisabled={isLastPage || pageCount === 0}
          >
            <IoIosArrowDroprightCircle />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
