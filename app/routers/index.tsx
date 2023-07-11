import React from 'react';
import $$AppRouter from '@smartface-generated/routers';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page2 from '../../.smartface/generated/pages/page2';

const Stack = createNativeStackNavigator();

const CustomLoginRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Page2}
        options={{ animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
};

const MainRouter = () => {
  return (
    <NavigationContainer>
      <$$AppRouter
        customRouter1={{
          component: CustomLoginRouter,
        }}
        customRouter2={{
          component: CustomLoginRouter,
        }}
        customBtb3={{
          component: CustomLoginRouter,
        }}
      />
    </NavigationContainer>
  );
};

export default MainRouter;
