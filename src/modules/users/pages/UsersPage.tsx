import { Fade, Flex, Icon } from '@chakra-ui/react';
import { useState } from 'react';

import { TbUsersGroup } from 'react-icons/tb';
import { CustomHeader } from '~/components/Headers';
import { MainLayout } from '~/components/Layouts';
import { FiltersDrawer } from '../components';

export const UsersPage = (): JSX.Element => {
  const [search, setSearch] = useState('');
  return (
    <MainLayout headTitle='Usuários'>
      <Fade in={true} style={{ width: '100%', height: '100%' }}>
        <CustomHeader
          title='Usuários'
          LeftIcon={<Icon as={TbUsersGroup} color='primary.100' fontSize='3xl' />}
          setSearch={setSearch}
        >
          <FiltersDrawer />
        </CustomHeader>
        <Flex bg='red'>a</Flex>
      </Fade>
    </MainLayout>
  );
};
