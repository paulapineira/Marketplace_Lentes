import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element, roleRequired }) => {
  const { user } = useAuth();

  // Si el usuario no está logueado, redirigir a login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Si el usuario no tiene el rol adecuado, redirigir a home o página predeterminada
  if (roleRequired && user.role !== roleRequired) {
    return <Navigate to="/" />;
  }

  return element; // Si esta logueado y tiene el rol adecuado, renderiza(actualiza) el componente 
};

export default PrivateRoute;


