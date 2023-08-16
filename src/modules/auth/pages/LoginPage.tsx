import { CustomLayout } from '~/components/Layouts';
import { LoginContent } from '../components';

export const LoginPage = (): JSX.Element => {
  return (
    <CustomLayout
      flexProps={{
        direction: 'column',
        justifyContent: 'center',
        align: 'center',
        h: '100vh',
      }}
      firstBoxProps={{ top: '0', left: '0' }}
      headTitle='Login'
    >
      <LoginContent />
    </CustomLayout>
  );
};
