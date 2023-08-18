import {
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { TextInput } from '~/components/Form';
import { TagList } from '~/components/Tags';

const tags = [
  { label: '18-26', minValue: '18', maxValue: '26' },
  { label: '25-31', minValue: '25', maxValue: '31' },
  { label: '30-36', minValue: '30', maxValue: '36' },
  { label: '35-41', minValue: '35', maxValue: '41' },
  { label: '40+', minValue: '40', maxValue: '' },
];

export const FiltersDrawer = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ageRange, setAgeRange] = useState<string[]>([]);
  const [status, setStatus] = useState('');

  const handleStatusChange = (newStatus: string) => {
    if (status === newStatus) {
      setStatus('');
    } else {
      setStatus(newStatus);
    }
  };

  return (
    <>
      <IconButton
        w='4rem'
        h='4rem'
        ml='1.6rem'
        bgColor='secondary.50'
        aria-label='filter-button'
        icon={<Icon as={FiFilter} color='white' fontSize='2xl' />}
        _hover={{ bgColor: 'primary.50' }}
        _active={{}}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='sm'>
        <DrawerOverlay />
        <DrawerContent bg='white'>
          <DrawerHeader>
            <Flex justify='space-between'>
              <Flex direction='column' gap='0.5rem'>
                <Heading fontWeight='bold' fontSize='2xl'>
                  Aplique filtros
                </Heading>
                <Text fontSize='sm'>
                  Encontre o usuário que você está procurando aplicando filtros de busca abaixo
                </Text>
              </Flex>
              <Icon
                as={IoMdClose}
                color='primary.50'
                fontSize='3xl'
                onClick={onClose}
                cursor='pointer'
              />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex>
              <TextInput
                type='date'
                label='Informe a data que deseja'
                color='primary.100'
                border='1.5px solid'
                borderColor='primary.100'
              />
            </Flex>
            <Divider my='1.5rem' borderColor='black.0' />
            <Flex direction='column'>
              <Text fontSize='sm' fontWeight='400' mb='0.6rem'>
                Informe a idade que deseja
              </Text>
              <Flex>
                <TagList selectedTags={ageRange} setSelectedTags={setAgeRange} tags={tags} />
              </Flex>
            </Flex>
            <Divider my='1.5rem' borderColor='black.0' />
            <Flex direction='column'>
              <Text fontSize='sm' fontWeight='400' mb='0.6rem'>
                Informe o status que deseja
              </Text>
              <Flex gap='1rem' fontWeight='500'>
                <Checkbox
                  onChange={() => handleStatusChange('active')}
                  colorScheme='green'
                  isChecked={status === 'active'}
                  size='lg'
                >
                  Ativo
                </Checkbox>
                <Checkbox
                  onChange={() => handleStatusChange('inactive')}
                  colorScheme='green'
                  isChecked={status === 'inactive'}
                  size='lg'
                >
                  Inativo
                </Checkbox>
                <Checkbox
                  onChange={() => handleStatusChange('blocked')}
                  colorScheme='green'
                  isChecked={status === 'blocked'}
                  size='lg'
                >
                  Bloqueado
                </Checkbox>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
