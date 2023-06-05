import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Generated Pages
import Page1 from '../../screens/Page1';

interface IAppNavigation {
  stack1Props?: NativeStackNavigationOptions
}

// GeneratedCode
const AppNavigatorUI = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="page1" component={Page1} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default AppNavigatorUI;


// app/generated
// >> components
// >> screens
// >> navigation
