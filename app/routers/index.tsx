import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import $$AppRouter from '@smartface-generated/routers';

const MainRouter = () => {
  return (
    <NavigationContainer>
      <$$AppRouter />
    </NavigationContainer>
  );
};

export default MainRouter;
