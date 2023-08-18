import { Flex, FlexProps } from '@chakra-ui/react';
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
      <Flex w='100%' align='center'>
        <Sidebar />
        <Flex w='100%' h='100%' justify='end'>
          <Flex w='90%' p='4rem'>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </CustomLayout>
  );
};
