import React from 'react';
import $$AppRouter from '@smartface-generated/routers';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PgRegister from '../../.smartface/generated/pages/pgRegister';

const Stack = createNativeStackNavigator();

const CustomLoginRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: 'slide_from_bottom' }}>
      <Stack.Screen
        name="test"
        component={PgRegister}
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
          screenProps: {
            options: { animation: 'slide_from_bottom', headerShown: false },
          },
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
