import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RecoverPasswordPage } from '~/modules/auth';

export const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/recuperar-senha' element={<RecoverPasswordPage />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};
