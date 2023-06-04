import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Generated Pages
import Page1 from '../../screens/scripts/pages/Page1';


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