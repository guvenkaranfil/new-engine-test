/**
 * @format
 */

import { AppRegistry, View, Text, Image, Appearance, Button, StatusBar, StyleSheet, TouchableOpacity, TextInput, Pressable, FlatList, Modal } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

import { Pixel, Point } from './icons';


Appearance.addChangeListener(() => {
    console.log('Theme has been changed!')
})

import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
const A = ({ onSubmit }) => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const isSubmitPressable = () => {
        if (username.length > 0 && password.length > 0) return false

        return true
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingVertical: 50, paddingHorizontal: 25 }}>



            <View style={{ width: 300, height: 300, justifyContent: 'space-between', backgroundColor: 'pink' }}>
                <Pixel />
                <Point />
            </View>


            {/* <TextInput
                testID="username-input"
                placeholder="Username"
                style={styles.input}
                value={username}
                onChangeText={setusername}
            />


            <TextInput
            nativeID=''
                testID="password-input"
                placeholder={`deneme`}
                style={styles.input}
                value={password}
                onChangeText={setpassword}
                secureTextEntry={true}
            />

            <FlatList
            
                style={{ width: 400, height: 200, backgroundColor: 'red' }}
                data={[{ name: "A" }]}
                renderItem={({ item }) => {
                    return (

                        <View style={{ width: 100, height: 200, backgroundColor: 'red' }}>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
                keyExtractor={(_, index) => String(index)}
                onEndReachedThreshold={0.1}
                onEndReached={() => {}}
            />
            
            <Text nativeID='' testID='' ></Text>

            <Button
                title='Submit'
                nativeID="login-button"
                testID='login-button'
                disabled={isSubmitPressable()}
                onPress={() => onSubmit(username + password)}
            />

            <Pressable
                nativeID=""
                testID="login-button"
                data-test-id
                disabled={isSubmitPressable()}
                onPress={() => onSubmit(username + password)}>
                <Text>Submit</Text>
            </Pressable> */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: '#000'
    }
})

const D = () => {
    return <A onSubmit={params => console.log('params:', params)} />
}

AppRegistry.registerComponent(appName, () => D);

