import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AuthLogo from '../../components/AuthLogo'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fonts from '../../helpers/Fonts'
import { ArrowDown, Female, Male } from '../../../icons'
import { TextInput } from 'react-native-paper'

export default function AboutYourself({navigation}) {
  const [gender, setgender] = useState<'male' | 'female'>('male')
  const isMale = gender === 'male'

  return (
    <SafeAreaView style={styles.container}>
      <AuthLogo />

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitleLbl}>A little about yourself</Text>
        <Text style={styles.infoDescribeLbl}>Ed laoreet eros laoreet.</Text>
      </View>

      <View style={styles.genderContainer}>
        <Text style={styles.genderLbl}>Your Gender</Text>

        <View style={styles.genderBoxes}>
          <TouchableOpacity style={styles.genderBox} onPress={() => setgender('male')}>
            <View style={[styles.iconWrapper, isMale ? styles.genderBoxActive : null]}>
              <Male width={16} height={28} isActive={gender === 'male'} />
            </View>
            <Text style={[styles.genderType, isMale ? styles.genderTypeActive : null]}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.genderBox} onPress={() => setgender('female')}>
            <View style={[styles.iconWrapper, !isMale ? styles.genderBoxActive : null]}>
              <Female width={16} height={28} isActive={gender === 'female'} />
            </View>
            <Text style={[styles.genderType, !isMale ? styles.genderTypeActive : null]}>Female</Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.birthdayWrapper}>
        <Text style={styles.genderLbl}>Your birthday</Text>

        <View style={styles.inputs}>
          <View style={styles.inputItem}>
            <Text style={styles.inputLbl}>Day:</Text>
            <TextInput style={[styles.input]} />
          </View>

          <View style={styles.mounthInput}>
            <Text style={styles.inputLbl}>Mounth:</Text>
            <TextInput style={[styles.input]} />
          </View>

          <View style={styles.mounthInput}>
            <Text style={styles.inputLbl}>Year:</Text>
            <TextInput style={[styles.input]} />
          </View>
        </View>
      </View>

      <View style={styles.birthdayWrapper}>
        <Text style={styles.genderLbl}>Your Location</Text>

        <View style={styles.locationWrapper}>
          <Text style={styles.locationLbl}>🇹🇷 Turkey, Sakarya</Text>
          <View style={styles.dropdown}>
            <ArrowDown width={12} height={12} />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.getStartBtn} onPress={() => navigation.navigate('signIn')}>
          <Text style={styles.getStartLbl}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    flex: 1,
    backgroundColor: '#F4F6F5'
  },

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

  genderContainer: {
    marginTop: 64,
    width: '100%',
  },

  genderLbl: {
    fontSize: 18,
    color: '#1C1F1E',
    fontFamily: Fonts.interMedium
  },

  genderBoxes: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  genderBox: {
    flexDirection: 'row',
    width: '48%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#EFF2F1'
  },

  genderBoxActive: {
    backgroundColor: '#66CA98',
  },

  iconWrapper: {
    width: 63,
    height: 63,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    backgroundColor: '#F4F6F5'
  },

  genderType: {
    paddingLeft: 16,
    fontSize: 18,
    color: '#1C1F1E'
  },

  genderTypeActive: {
    color: '#66CA98'
  },

  birthdayWrapper: {
    marginTop: 42,
  },

  inputLbl: {
    marginBottom: 8,
    fontSize: 16,
    color: '#A7A6A5'
  },

  inputs: {
    marginTop: 15,
    flexDirection: 'row'
  },

  inputItem: {

  },

  input: {
    width: 80,
    height: 36,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#1C1F1E',
    borderRadius: 8,
    backgroundColor: '#F4F6F5'
  },

  dayInput: {
    width: 80,
    height: 36,
  },

  mounthInput: {
    marginLeft: 16
  },

  locationWrapper: {
    paddingLeft: 15,
    marginTop: 15,
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#EFF2F1',
  },

  locationLbl: {
    fontSize: 16,
    color: '#1C1F1E'
  },

  dropdown: {
    width: 40,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#FFFFFF'
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