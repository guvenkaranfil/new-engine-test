
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import page2 from '@app/pages/page2';


const Stack = createNativeStackNavigator();


const MainRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="page2" options={{ headerShown: false }} component={page2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainRouter;
