import { Icon, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import { FiTrash } from 'react-icons/fi';
import { User } from '~/types';

const columnHelper = createColumnHelper<User>();

// type HeadersUsersProps = {
//   filter: string;
//   deleteUserFn: (userId: string) => void;
//   deleteUserLoading: boolean;
// };

export const headersUsers = () => {
  return [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (props) => {
        const paddedId = props.getValue().toString().padStart(3, '0');
        return (
          <Text fontSize='md' color='white' align='center' fontWeight='bold'>
            {paddedId}
          </Text>
        );
      },
    }),
    columnHelper.accessor('name', {
      header: 'Nome',
      size: 1200,
      cell: (props) => (
        <Text align='center' color='white' fontSize='md'>
          {props.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('cpf', {
      header: 'CPF',
      size: 1200,
      cell: (props) => (
        <Text align='center' color='white' fontSize='md'>
          {props.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('email', {
      header: 'E-mail',
      size: 1200,
      cell: (props) => (
        <Text align='center' color='white' fontSize='md'>
          {props.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('phone', {
      header: 'Telefone',
      size: 1200,
      cell: (props) => (
        <Text align='center' color='white' fontSize='md'>
          {props.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('birthDate', {
      header: 'Data de nascimento',
      size: 1200,
      cell: (props) => {
        const formattedDate = new Date(props.getValue()).toLocaleDateString('pt-BR');

        return (
          <Text align='center' color='white' fontSize='md'>
            {formattedDate}
          </Text>
        );
      },
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      size: 1200,
      cell: (props) => {
        const status = props.getValue();

        const translateStatus = () => {
          switch (status) {
            case 'active':
              return 'Ativo';
            case 'inactive':
              return 'Inativo';
            default:
              return 'Bloqueado';
          }
        };

        return (
          <Text align='center' fontSize='md' color='white'>
            {translateStatus()}
          </Text>
        );
      },
    }),
    columnHelper.accessor('id', {
      header: 'Ações',
      size: 1,
      cell: () => {
        return <Icon as={FiTrash} color='primary.50' fontSize='2xl' cursor='pointer' />;
      },
    }),
  ];
};
