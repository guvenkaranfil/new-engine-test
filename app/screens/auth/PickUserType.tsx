import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fonts from '../../helpers/Fonts'
import { Doctor, Patient } from '../../../icons'
import AuthLogo from '../../components/AuthLogo'

export default function PickUserType({ navigation }) {
  const [userType, setuserType] = useState<'patient' | 'doctor'>('patient')

  return (
    <SafeAreaView style={styles.container}>
      <AuthLogo />

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitleLbl}>Let's get acquainted</Text>
        <Text style={styles.infoDescribeLbl}>Pellentesque placerat arcu in risus facilisis, sed laoreet eros laoreet.</Text>
      </View>

      <View style={styles.userType}>
        <TouchableOpacity onPress={() => setuserType('patient')}>
          <>
            <View style={styles.typeItem}>
              <View style={[userType === 'patient' ? styles.activeType : null, styles.rectangle]}>
                <Patient width={32} height={35} fill={userType === 'patient' ? "#fff" : '#000'} stroke={userType === 'patient' ? "#fff" : '#000'} />
              </View>

              <View style={styles.itemLblContainer}>
                <Text style={[styles.itemTitle, userType === 'patient' ? styles.itemActive : null]}>I’m a patient</Text>
                <Text style={styles.itemInfo}>Proin convallis libero ac nisl </Text>
              </View>
            </View>
          </>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setuserType('doctor')} style={styles.mt74}>
          <>
            <View style={styles.typeItem}>
              <View style={[userType === 'doctor' ? styles.activeType : null, styles.rectangle]}>
                <Doctor width={32} height={35} isActive={userType === 'doctor'} />
              </View>

              <View style={styles.itemLblContainer}>
                <Text style={[styles.itemTitle, userType === 'doctor' ? styles.itemActive : null]}>I’m a doctor</Text>
                <Text style={styles.itemInfo}>Proin convallis libero ac nisl</Text>
              </View>
            </View>
          </>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.getStartBtn} onPress={() => navigation.navigate('aboutYourself')}>
          <Text style={styles.getStartLbl}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    flex: 1,
    backgroundColor: '#F4F6F5'
  },

  mt74: { marginTop: 74 },

  infoContainer: {
    alignItems: 'center'
  },

  infoTitleLbl: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: Fonts.interSemiBold,
    color: '#1C1F1E',
  },

  infoDescribeLbl: {
    paddingTop: 13,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.interMedium,
    color: '#A7A6A5'
  },

  logoContainer: {
    marginTop: 30,
    marginBottom: 60,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },

  logo: {
    width: 32,
    height: 32,
  },

  userType: {
    marginTop: 100,
    flex: 1,
  },

  typeItem: {
    flexDirection: 'row',
  },

  itemLblContainer: {
    marginLeft: 18
  },

  itemTitle: {
    fontSize: 18,
    fontFamily: Fonts.interSemiBold,
    color: '#A7A6A5'
  },

  itemActive: {
    color: '#66CA98',
  },

  itemInfo: {
    paddingTop: 21,
    fontSize: 14,
    fontFamily: Fonts.interMedium,
    color: '#A7A6A5'
  },

  rectangle: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },

  activeType: {
    backgroundColor: '#66CA98'
  },

  footer: {
    height: 100,
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