import { Fade, Flex, Icon } from '@chakra-ui/react';
import { FiUserPlus } from 'react-icons/fi';

import { CustomHeader, MainLayout } from '~/components';
import { CreateUserForm } from '../components';

export const InsertUserPage = (): JSX.Element => {
  return (
    <MainLayout headTitle='Adicionar Usuário'>
      <Fade in={true} style={{ width: '100%', height: '100%', zIndex: 1 }}>
        <CustomHeader
          title='Adicionar Usuário'
          LeftIcon={<Icon as={FiUserPlus} color='primary.100' fontSize='3xl' />}
        />
        <Flex mt='1.5rem' direction='column' maxH='calc(100vh - 20rem)' w='100%'>
          <CreateUserForm />
        </Flex>
      </Fade>
    </MainLayout>
  );
};
