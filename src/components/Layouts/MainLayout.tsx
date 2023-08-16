import { FlexProps, Grid, GridItem } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useDocumentTitle } from '~/hooks';
import { CustomLayout } from './CustomLayout';
import { Sidebar } from '../Sidebar';

type MainLayoutProps = {
  headTitle: string;
  children: ReactNode;
} & FlexProps;

export const MainLayout = ({ headTitle, children, ...rest }: MainLayoutProps): JSX.Element => {
  useDocumentTitle({ title: headTitle });

  return (
    <CustomLayout
      firstBoxProps={{ filter: 'blur(20rem)' }}
      secondBoxProps={{ filter: 'blur(20rem)' }}
      headTitle={headTitle}
      {...rest}
    >
      <Grid templateColumns='repeat(2, 3fr)' overflowX='hidden'>
        <GridItem pl='5.6rem' minW='14.6rem' pt='5.9rem' pb='5rem' display='flex'>
          <Sidebar />
        </GridItem>
        <GridItem minW='calc(100vw - 14.6rem - 10rem)'>{children}</GridItem>
      </Grid>
    </CustomLayout>
  );
};
