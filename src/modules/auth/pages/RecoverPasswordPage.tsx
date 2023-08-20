import { CustomLayout } from '~/components';
import { RecoverContent } from '../components';

export const RecoverPasswordPage = (): JSX.Element => {
  return (
    <CustomLayout
      flexProps={{
        direction: 'column',
        justifyContent: 'center',
        align: 'center',
        h: '100vh',
      }}
      firstBoxProps={{ top: '0', left: '0' }}
      headTitle='Recuperar Senha'
    >
      <RecoverContent />
    </CustomLayout>
  );
};
