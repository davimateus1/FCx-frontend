import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from '~/modules/auth';

export const AppRoutes = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/recuperar-senha' element={<></>} />
        <Route path='/' element={<></>} />
        <Route path='/adicionar-usuario' element={<></>} />
        <Route path='/editar-usuario/:userId' element={<></>} />
        <Route path='*' element={<></>} /> {/* 404 */}
      </Routes>
    </Router>
  );
};
