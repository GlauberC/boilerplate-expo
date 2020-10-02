import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './AuthRoutes';
import NoAuthRoutes from './NoAuthRoutes';
import { useAuth } from '../providers/auth.provider';

function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AuthRoutes /> : <NoAuthRoutes />}
    </NavigationContainer>
  );
}

export default Routes;
