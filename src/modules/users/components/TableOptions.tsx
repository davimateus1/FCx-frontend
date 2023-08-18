import { Button, Flex, Icon } from '@chakra-ui/react';

import { BsFiletypeDocx, BsFiletypeXlsx, BsFiletypePdf } from 'react-icons/bs';
import { useDownloadDocument } from '../api/hooks';

export const TableOptions = (): JSX.Element => {
  const { mutateAsync } = useDownloadDocument();

  const handleDownload = async (docType: string) => {
    await mutateAsync(docType);
  };

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
          <Button
            color='white'
            bg='colored.0'
            leftIcon={<Icon fontSize='xl' as={BsFiletypeDocx} />}
            onClick={() => handleDownload('docx')}
            _hover={{}}
          >
            DOCX
          </Button>
          <Button
            color='white'
            bg='colored.50'
            leftIcon={<Icon fontSize='xl' as={BsFiletypePdf} />}
            onClick={() => handleDownload('pdf')}
            _hover={{}}
          >
            PDF
          </Button>
          <Button
            color='white'
            bg='colored.100'
            leftIcon={<Icon fontSize='xl' as={BsFiletypeXlsx} />}
            onClick={() => handleDownload('xlsx')}
            _hover={{}}
          >
            XLSX
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
