import { BrowserRouter as Router } from 'react-router-dom';
import { useAuthContext } from '~/modules/auth';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = (): JSX.Element => {
  const { user } = useAuthContext();

  return <Router>{user ? <AuthenticatedRoutes /> : <PublicRoutes />}</Router>;
};
