import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text>Go To Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})