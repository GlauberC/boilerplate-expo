import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import Providers from './providers';
const foo = 'test';

export default function App() {
  return (
    <Providers>
      <StatusBar />
      <Routes />
    </Providers>
  );
}
