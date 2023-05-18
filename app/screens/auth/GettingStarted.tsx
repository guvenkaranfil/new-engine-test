import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'



export default function GettingStarted({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/getStart.png')} style={styles.getStartImage} />

      <View style={styles.footer}>
        <Text style={styles.message}>Manage your health and</Text>
        <Text style={styles.message}>happy future</Text>

        <TouchableOpacity style={styles.getStartBtn} onPress={() => navigation.navigate('pickUserType')}>
          <Text style={styles.getStartLbl}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  getStartImage: {
    width: width,
    height: height - 250,
    resizeMode: 'cover'
  },

  footer: {
    height: 210,
    alignSelf: 'center',
  },

  message: {
    fontSize: 28,
    fontWeight: '400',
    textAlign: 'center'
  },

  getStartBtn: {
    marginTop: 35,
    width: 200,
    height: 50,
    borderRadius: 18,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66CA98'
  },

  getStartLbl: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
})