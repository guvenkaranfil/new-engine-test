import React from 'react'

import AppNavigatorUI from './app/navigation/generated/AppNavigation';

import { ThemeProvider } from './context';
export default function App() {
  return (
    <ThemeProvider>
      <AppNavigatorUI />
    </ThemeProvider>
  )
}
