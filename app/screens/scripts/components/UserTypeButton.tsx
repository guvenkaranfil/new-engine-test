import { GestureResponderEvent, PressableProps, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UserTypeButtonDesign from '../../generated/components/UserTypeButtonDesign'
import Fonts from '../../../helpers/Fonts';

export interface IUserTypeButton {
  userType: 'patient' | 'doctor',
  userTypeButtonPress?: ((event: GestureResponderEvent) => void) | undefined;
}

// Library Component
// User file - Fully Editable
export default function UserTypeButton(props: IUserTypeButton) {
  return (
    <UserTypeButtonDesign
      userTypeButton={{
        onPress: props.userTypeButtonPress
      }}
      view1Props={{
        style: [props.userType === 'patient' ? Themes.activeType : null, Themes.rectangle]
      }}
      PatientIcon1Props={{
        fill: props.userType === 'patient' ? "#fff" : '#000',
        stroke: props.userType === 'patient' ? "#fff" : '#000'
      }}
    />
  )
}

// Theme context'den bağlanmış olucak
const Themes = StyleSheet.create({
  activeType: {
    backgroundColor: '#66CA98'
  },

  rectangle: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
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
})