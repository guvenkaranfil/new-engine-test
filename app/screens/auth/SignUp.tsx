import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import AuthLogo from '../../components/AuthLogo'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fonts from '../../helpers/Fonts'
import { Check, Closed, Eye } from '../../../icons'

export default function SignUp({ navigation }) {
  const [passVisible, setpassVisible] = useState(false)
  const [fullname, setfullname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [isAggrementChecked, setisAggrementChecked] = useState(false)

  const [showFullNameError, setshowFullNameError] = useState(false)
  const [showEmailError, setshowEmailError] = useState(false)
  const [showpasswordError, setshowpasswordError] = useState(false)
  const [showAggrementError, setshowAggrementError] = useState(false)

  const onChangeFullName = (_fullName: string) => {
    if (_fullName.length === 0 && !showFullNameError) {
      setshowFullNameError(true)
    }

    if (showFullNameError && _fullName.length > 0) {
      setshowFullNameError(false)
    }

    setfullname(_fullName)
  }

  const onChangeEmail = (_email: string) => {
    if (_email.length === 0 && !showEmailError) {
      setshowEmailError(true)
    }

    if (showEmailError && _email.length > 0) {
      setshowEmailError(false)
    }

    setemail(_email)
  }

  const onChangePassword = (_password: string) => {
    if (_password.length === 0 && !showpasswordError) {
      setshowpasswordError(true)
    }

    if (showpasswordError && _password.length > 0) {
      setshowpasswordError(false)
    }

    setpassword(_password)
  }

  const onSubmitSignIn = () => {
    setshowAggrementError(!isAggrementChecked)

    if (fullname.length === 0) setshowFullNameError(true)
    if (email.length === 0) setshowEmailError(true)
    if (password.length === 0) setshowpasswordError(true)

    if (isAggrementChecked && fullname.length > 0 && email.length > 0 && password.length > 0) {
      navigation.navigate('approveCode')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <AuthLogo />

        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.inputLbl}>Full Name</Text>
              {showFullNameError && <Text style={styles.errorLbl}>*</Text>}
            </View>
            {showFullNameError && <Text style={[styles.errorLbl]}>Suspendisse efficitur placerat nisi</Text>}
          </View>
          <TextInput
            value={fullname}
            onChangeText={onChangeFullName}
            style={[styles.input, showFullNameError && styles.errorInput]} />
        </View>

        <View style={styles.inputItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.inputLbl}>Email</Text>
              {showEmailError && <Text style={styles.errorLbl}>*</Text>}
            </View>
            {showEmailError && <Text style={[styles.errorLbl]}>Suspendisse efficitur placerat nisi</Text>}
          </View>
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            placeholder='patient@self.com'
            style={[styles.input, showEmailError && styles.errorInput]} />
        </View>

        <View style={styles.inputItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.inputLbl}>Password</Text>
              {showpasswordError && <Text style={styles.errorLbl}>*</Text>}
            </View>
            {showpasswordError && <Text style={[styles.errorLbl]}>Suspendisse efficitur placerat nisi</Text>}
          </View>

          <View style={styles.row}>
            <TextInput
              value={password}
              onChangeText={onChangePassword}
              placeholder='Min 8 cyfr'
              secureTextEntry={passVisible}
              style={[styles.input, styles.passInput, showpasswordError && styles.errorInput]} />
            <TouchableOpacity style={styles.passVisible} onPress={() => setpassVisible(!passVisible)} >
              {!passVisible ? <Eye /> : <Closed />}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, }}>
          <TouchableOpacity
            onPress={() => {
              if (!isAggrementChecked) {
                setshowAggrementError(false)
              }
              setisAggrementChecked(!isAggrementChecked)
            }}
            style={[styles.checkbox, isAggrementChecked && styles.checkedBox]}>
            <Check width={20} height={15} />
          </TouchableOpacity>
          <Text style={styles.forgotPassword}>I agree with Terms and <Text style={styles.navigateLbl}>Privacy Policy</Text></Text>
        </View>
        {showAggrementError && <Text style={[styles.errorLbl]}>Suspendisse efficitur placerat nisi</Text>}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.getStartBtn} onPress={onSubmitSignIn}>
          <Text style={styles.getStartLbl}>Sign Up</Text>
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate('signIn')} style={styles.footerLbl}>Already have account? <Text style={styles.navigateLbl}>Sign In</Text></Text>
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
    marginBottom: 35,
    textAlign: 'center',
    fontSize: 28,
    fontFamily: Fonts.interSemiBold,
    color: '#1C1F1E',
  },

  inputLbl: {
    fontSize: 16,
    fontFamily: Fonts.inter,
    color: '#A7A6A5',
  },

  inputItem: {
    marginBottom: 16
  },

  input: {
    marginTop: 6,
    paddingHorizontal: 18,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#EFF2F1',
  },

  errorInput: {
    borderWidth: 1,
    borderColor: '#FF6C52'
  },

  passInput: {
    width: width - 26 * 2 - 40
  },

  passVisible: {
    marginTop: 6,
    width: 40,
    height: 45,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF2F1',
  },

  forgotPassword: {
    paddingLeft: 12,
    fontSize: 14,
    fontFamily: Fonts.inter,
    fontWeight: '500',
    color: '#A7A6A5'
  },

  footer: {
    marginVertical: 35
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