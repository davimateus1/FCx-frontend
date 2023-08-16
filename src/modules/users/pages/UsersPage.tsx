import { Fade, Flex } from '@chakra-ui/react';
import { MainLayout } from '~/components/Layouts';

export const UsersPage = (): JSX.Element => {
  return (
    <MainLayout headTitle='Usuários'>
      <Fade in={true} style={{ width: '100%', height: '100%' }}>
        <Flex h='100%'></Flex>
      </Fade>
    </MainLayout>
  );
};
