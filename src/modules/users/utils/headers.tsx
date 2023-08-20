import { Flex, Icon, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { User, UserStatus } from '~/types';
import { MdOutlineBlock } from 'react-icons/md';
import { LuUserCheck, LuUserX } from 'react-icons/lu';
import { CustomActionModal } from '~/components';
import { EditUserModal } from '../components';
import { translateStatusToText } from '.';

const columnHelper = createColumnHelper<User>();

type HeadersUsersProps = {
  handleChangeStatus: (userId: number, status: UserStatus) => void;
  changeStatusLoading: boolean;
};

export const headersUsers = ({ handleChangeStatus, changeStatusLoading }: HeadersUsersProps) => {
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
      header: 'Email',
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
        const formattedDate = new Date(props.getValue()).toLocaleDateString('pt-BR', {
          timeZone: 'UTC',
        });

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

        const getBgColor = () => {
          switch (status) {
            case UserStatus.ACTIVE:
              return 'green.500';
            case UserStatus.INACTIVE:
              return 'red.500';
            case UserStatus.BLOCKED:
              return 'yellow.500';
            default:
              return 'gray.500';
          }
        };

        return (
          <Flex justify='center'>
            <Text
              align='center'
              fontSize='md'
              color='white'
              w='auto'
              p='0.5rem'
              bg={getBgColor()}
              borderRadius='0.5rem'
            >
              {translateStatusToText(status)}
            </Text>
          </Flex>
        );
      },
    }),
    columnHelper.accessor('id', {
      header: 'Ações',
      size: 500,
      cell: (props) => {
        const status = props.row.original.status;
        const isInactive = status === UserStatus.INACTIVE;
        const userId = props.getValue();

        return (
          <Flex justify='space-around' align='center'>
            <EditUserModal id={userId} />
            <CustomActionModal
              status={status}
              title={`${isInactive ? 'Ativar' : 'Desativar'} usuário`}
              description={`Tem certeza que deseja ${
                isInactive ? 'ativar' : 'desativar'
              } esse usuário?`}
              confirmText={isInactive ? 'Ativar' : 'Desativar'}
              isLoading={changeStatusLoading}
              actionFunction={
                isInactive
                  ? () => handleChangeStatus(userId, UserStatus.ACTIVE)
                  : () => handleChangeStatus(userId, UserStatus.INACTIVE)
              }
            >
              <Icon
                as={isInactive ? LuUserCheck : LuUserX}
                color={isInactive ? 'primary.100' : 'yellow.500'}
                fontSize='3xl'
              />
            </CustomActionModal>
            <CustomActionModal
              status={status}
              title='Bloquear usuário'
              description='Tem certeza que deseja bloquear esse usuário?'
              confirmText='Bloquear'
              isLoading={changeStatusLoading}
              actionFunction={() => handleChangeStatus(userId, UserStatus.BLOCKED)}
            >
              <Icon as={MdOutlineBlock} color='primary.50' fontSize='3xl' />
            </CustomActionModal>
          </Flex>
        );
      },
    }),
  ];
};
