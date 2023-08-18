import { Button, Flex } from '@chakra-ui/react';

export const TableOptions = (): JSX.Element => {
  return (
    <Flex mb='1rem' direction='column'>
      <Flex bg='yellow'></Flex>
      <Flex justify='space-between'>
        <Flex>
          <Button bg='primary.50' color='white'>
            Apagar todos
          </Button>
        </Flex>
        <Flex gap='1rem'>
          <Button color='white' bg='colored.0'>
            DOCX
          </Button>
          <Button color='white' bg='colored.50'>
            PDF
          </Button>
          <Button color='white' bg='colored.100'>
            XLSX
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
