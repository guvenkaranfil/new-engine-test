import React, { useState } from 'react'
import Page1Design from './generated/pages/Page1Design'


export default function PickUserType({ }) {
  const [userType, setuserType] = useState<'patient' | 'doctor'>('patient');


  return <Page1Design
    userTypeButton1={{
      userType: userType
    }}

    btn1Props={{
      onPress: () => {
        if (userType === 'doctor') {
          setuserType('patient')
        } else {
          setuserType('doctor')
        }
      }
    }}

    text1Pros={{ label: 'Continue' }}

  />
}
