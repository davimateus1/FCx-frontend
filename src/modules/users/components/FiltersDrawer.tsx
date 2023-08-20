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

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FiFilter } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

import { TextInput, TagList } from '~/components';
import { tags } from '../utils';
import { UserStatus } from '~/types';

type FiltersDrawerProps = {
  status: string;
  ageRange: string[];
  setPage: Dispatch<SetStateAction<number>>;
  setDate: Dispatch<SetStateAction<{ from: string; to: string }>>;
  setStatus: Dispatch<SetStateAction<UserStatus>>;
  setAgeRange: Dispatch<SetStateAction<Array<string>>>;
};

export const FiltersDrawer = ({
  status,
  ageRange,
  setDate,
  setStatus,
  setAgeRange,
  setPage,
}: FiltersDrawerProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleStatusChange = (newStatus: UserStatus) => {
    if (status === newStatus) {
      setStatus(UserStatus.ACTIVE);
    } else {
      setStatus(newStatus);
    }
  };

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (value.trim() === '') {
      return setDate((prev) => ({ ...prev, [name]: '' }));
    }

    setDate((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenDrawer = () => {
    setPage(1);
    onOpen();
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
        onClick={handleOpenDrawer}
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
            <Flex direction='column' gap='0.5rem'>
              <Text fontWeight='500'>Informe o intervalo de data que deseja</Text>
              <TextInput
                type='date'
                label='De:'
                color='primary.100'
                border='1.5px solid'
                borderColor='primary.100'
                onChange={(e) => handleChangeDate(e)}
                name='from'
              />
              <TextInput
                type='date'
                label='Até:'
                color='primary.100'
                border='1.5px solid'
                borderColor='primary.100'
                onChange={(e) => handleChangeDate(e)}
                name='to'
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
                  onChange={() => handleStatusChange(UserStatus.ACTIVE)}
                  colorScheme='green'
                  isChecked={status === 'active'}
                  size='lg'
                >
                  Ativo
                </Checkbox>
                <Checkbox
                  onChange={() => handleStatusChange(UserStatus.INACTIVE)}
                  colorScheme='green'
                  isChecked={status === 'inactive'}
                  size='lg'
                >
                  Inativo
                </Checkbox>
                <Checkbox
                  onChange={() => handleStatusChange(UserStatus.BLOCKED)}
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
