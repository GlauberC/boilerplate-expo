import React from 'react';
import { AuthProvider } from './auth.provider';
const Providers: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default Providers;
