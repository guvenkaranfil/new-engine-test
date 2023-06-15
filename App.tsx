import React from 'react';

import AppNavigatorUI from './app/routers';

import { ThemeProvider } from './context';
export default function App() {
  return (
    <ThemeProvider>
      <AppNavigatorUI />
    </ThemeProvider>
  );
}
