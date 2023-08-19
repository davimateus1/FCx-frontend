import { Fade, Flex, Icon } from '@chakra-ui/react';
import { useState } from 'react';

import { TbUsersGroup } from 'react-icons/tb';
import { useChangeStatus, useGetUsers } from '../api/hooks';

import { headersUsers } from '../utils/headers';
import { CustomHeader, MainLayout, Table } from '~/components';
import { FiltersDrawer, TableOptions } from '../components';

import { UserStatus } from '~/types';
import { ScrollbarStyle } from '~/styles';

const INITIAL_PAGE = 1;

export const UsersPage = (): JSX.Element => {
  const [date, setDate] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(INITIAL_PAGE);
  const [ageRange, setAgeRange] = useState<string[]>([]);
  const [status, setStatus] = useState<UserStatus>(UserStatus.ACTIVE);

  const { data, isLoading: usersLoading } = useGetUsers({
    search,
    minAge: ageRange[0],
    maxAge: ageRange[1],
    status,
    date,
    page,
  });

  const users = data?.users ?? [];
  const pageCount = data?.totalPages ?? 0;

  const { changeStatusMutate, changeStatusLoading } = useChangeStatus();

  const handleChangeStatus = (userId: number, status: UserStatus) => {
    changeStatusMutate({ id: userId, status });
  };

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
            setPage={setPage}
          />
        </CustomHeader>
        <Flex mt='1.5rem' direction='column' maxH='calc(100vh - 20rem)'>
          <TableOptions page={page} pageCount={pageCount} setPage={setPage} />
          <Flex overflowY='auto' sx={{ ...ScrollbarStyle }}>
            <Table
              columns={headersUsers({ handleChangeStatus, changeStatusLoading })}
              data={users}
              bgColor='secondary.50'
              isLoading={usersLoading}
            />
          </Flex>
        </Flex>
      </Fade>
    </MainLayout>
  );
};
