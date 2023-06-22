
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
};

export default MainRouter;
