import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

export const AppRoutes = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<></>} />
        <Route path='/' element={<></>} />
        <Route path='/adicionar-usuario' element={<></>} />
        <Route path='/editar-usuario/:userId' element={<></>} />
        <Route path='*' element={<></>} /> {/* 404 */}
      </Routes>
    </Router>
  );
};
