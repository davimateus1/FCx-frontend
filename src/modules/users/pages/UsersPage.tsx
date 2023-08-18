import { Fade, Flex, Icon } from '@chakra-ui/react';
import { useState } from 'react';

import { TbUsersGroup } from 'react-icons/tb';
import { useGetUsers } from '../api/hooks';

import { headersUsers } from '../utils/headers';
import { CustomHeader, MainLayout, Table } from '~/components';
import { FiltersDrawer, TableOptions } from '../components';
import { UserStatus } from '~/types';

export const UsersPage = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<UserStatus>(UserStatus.ACTIVE);

  const [ageRange, setAgeRange] = useState<string[]>([]);
  const [date, setDate] = useState('');

  const { data: users, isLoading: usersLoading } = useGetUsers({
    search,
    minAge: ageRange[0],
    maxAge: ageRange[1],
    status,
    date,
  });

  console.log(date);

  return (
    <MainLayout headTitle='Usuários'>
      <Fade in={true} style={{ width: '100%', height: '100%', zIndex: 1 }}>
        <CustomHeader
          title='Usuários'
          LeftIcon={<Icon as={TbUsersGroup} color='primary.100' fontSize='3xl' />}
          setSearch={setSearch}
        >
          <FiltersDrawer
            status={status}
            ageRange={ageRange}
            setStatus={setStatus}
            setAgeRange={setAgeRange}
            setDate={setDate}
          />
        </CustomHeader>
        <Flex mt='1.5rem' direction='column'>
          <TableOptions />
          <Table
            columns={headersUsers()}
            data={users ?? []}
            bgColor='secondary.50'
            isLoading={usersLoading}
          />
        </Flex>
      </Fade>
    </MainLayout>
  );
};
