//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

import React from 'react';
import $$AppRouter from '@smartface-generated/routers';

import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pgRegister from '@app/pages/pgRegister';


const Stack = createNativeStackNavigator();


const MainRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="pgRegister" options={{ headerShown: false }} component={pgRegister} />
            </Stack.Navigator>
        </NavigationContainer>
    );
=======

const MainRouter = () => {
  return (
    <NavigationContainer>
      <$$AppRouter />
    </NavigationContainer>
  );
>>>>>>> 2eb2df5d15ce26e12feb2d165606df9328a4d692
};

export default MainRouter;
