import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from '~/modules/auth';
import { UsersPage } from '~/modules/users';

export const AppRoutes = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/usuarios' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/recuperar-senha' element={<></>} />
        <Route path='/usuarios' element={<UsersPage />} />
        <Route path='/adicionar-usuario' element={<></>} />
        <Route path='/editar-usuario/:userId' element={<></>} />
        <Route path='*' element={<>ERRO</>} /> {/* 404 */}
      </Routes>
    </Router>
  );
};
