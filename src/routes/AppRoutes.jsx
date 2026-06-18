// AppRoutes.jsx — Central routing configuration

import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Account from '../pages/Account';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
