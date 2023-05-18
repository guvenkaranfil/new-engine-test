import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

export default function Dashboard() {
  const [doctors, setdoctors] = useState<[Doctor]>()
  const [isFetching, setisFetching] = useState(false)

  useEffect(() => {
    setisFetching(true)
    // https://my.api.mockaroo.com/doctors?key=c3d6fbe
    axios.get('https://url.com').then((response) => {
      setdoctors(response.data)
    }).catch(() => {
      const _doctors = require('../../mock_data.json')
      setdoctors(_doctors)
    }).finally(() => { setisFetching(false) })
  }, [])

  if (isFetching) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color='#00000' />
      </View>
    )
  }

  console.log("_doctorss: ", doctors)
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})



export interface Doctor {
  id: number;
  first_name: string;
  last_name: string;
  patient_count: number;
  experience: number;
  rating: number;
  field: string;
  review_count: number;
  location: Location;
  about: string;
  schedule: Schedule[];
  profile_photo: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  name: string;
  address: string;
}

export interface Schedule {
  day: string;
  appointment: Appointment[];
}

export interface Appointment {
  time: string;
  is_booked: boolean;
}
