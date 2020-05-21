import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes'

function Routes() {
  // Isso vai ser autentificação, usando true como teste
  // const { user } = useAuth();
  user = true;

  return user ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
