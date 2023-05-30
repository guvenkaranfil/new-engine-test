import React, { useState } from 'react'
import Page1Design from '../../generated/pages/Page1Design'


// Page1 User File
// Fully Editable
export default function Page1({ }) {
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
