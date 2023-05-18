import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import AuthLogo from '../../components/AuthLogo'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fonts from '../../helpers/Fonts'
import { Check, Closed } from '../../../icons'

export default function ApproveCode({ navigation }) {
  const onSubmitSignIn = () => {
    navigation.navigate('dashboard')
  }

  return (
    <SafeAreaView style={styles.container}>
      <AuthLogo />

      <Text style={styles.title}>Your Code</Text>
      <Text style={styles.subtitle}>Code send to yor Email</Text>

      <View style={styles.inputs}>
        <TextInput style={styles.inputBox} keyboardType='numeric' maxLength={1} />
        <TextInput style={styles.inputBox} keyboardType='numeric' maxLength={1} />
        <TextInput style={styles.inputBox} keyboardType='numeric' maxLength={1} />
        <TextInput style={styles.inputBox} keyboardType='numeric' maxLength={1} />
      </View>



      <View style={styles.footer}>
        <TouchableOpacity style={styles.getStartBtn} onPress={onSubmitSignIn}>
          <Text style={styles.getStartLbl}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    flex: 1,
    backgroundColor: '#F4F6F5'
  },

  checkbox: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dce0de'
  },

  checkedBox: {
    backgroundColor: '#66CA98'
  },

  row: {
    flexDirection: 'row'
  },

  title: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: Fonts.interSemiBold,
    color: '#1C1F1E',
  },

  subtitle: {
    paddingTop: 13,
    marginBottom: 35,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.interSemiBold,
    color: '#A7A6A5',

  },

  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBox: {
    width: (width - 25 - 60) / 4,
    height: (width - 25 - 45) / 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF2F1',
    borderRadius: 13,
    color: '#1C1F1E',
    fontSize: 28,
    textAlign: 'center'
  },

  footer: {
    marginVertical: 80
  },

  getStartBtn: {
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
    fontFamily: Fonts.interSemiBold,
    color: '#fff'
  },

  footerLbl: {
    paddingTop: 13,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.inter,
    color: '#A7A6A5',
  },

  navigateLbl: {
    color: '#66CA98',
    textDecorationLine: 'underline'
  },

  errorLbl: {
    paddingLeft: 4,
    paddingTop: 4,
    fontSize: 12,
    fontFamily: Fonts.inter,
    color: '#FF6C52'
  }
})