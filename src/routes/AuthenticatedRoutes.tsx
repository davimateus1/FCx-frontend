import { Navigate, Route, Routes } from 'react-router-dom';
import { InsertUserPage, UsersPage } from '~/modules/users';

export const AuthenticatedRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/usuarios' />} />
      <Route path='/usuarios' element={<UsersPage />} />
      <Route path='/adicionar-usuario' element={<InsertUserPage />} />
      <Route path='*' element={<Navigate to='/usuarios' />} />
    </Routes>
  );
};
