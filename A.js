import { AppRegistry, View, Text, Image, Appearance, Button, StatusBar, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';

import React, { useState } from 'react';
const A = ({ onSubmit }) => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const isSubmitPressable = () => {
        if (username.length > 0 && password.length > 0) return false

        return true
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingVertical: 50, paddingHorizontal: 25 }}>
            <TextInput
                testID="username-input"
                placeholder="Username"
                style={styles.input}
                value={username}
                onChangeText={setusername}
            />
            <TextInput
                testID="password-input"
                placeholder="Password"
                style={styles.input}
                value={password}
                onChangeText={setpassword}
                secureTextEntry={true}
            />



            <Pressable
                nativeID=""
                testID="login-button"
                data-test-id
                disabled={isSubmitPressable()}
                onPress={() => onSubmit({ username: username, password: password })}>
                <Text>Submit</Text>
            </Pressable>
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