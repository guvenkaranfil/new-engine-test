import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Calendar, Filter, Location, Notification, Search, Time } from '../../icons'
import Fonts from '../helpers/Fonts'

const { width } = Dimensions.get('window')

const CATEGORIES = [
  "Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Hematology", "Neurology", "Oncology", "Pediatrics", "Psychiatry", "Radiology", "Surgery"
]

const HASH_TAGS = [
  "heart", "teeth", "Surgeon", "eyes", "hematology",
  "heart", "teeth", "Surgeon", "eyes", "hematology",
  "heart", "teeth", "Surgeon", "eyes", "hematology",
]

let recentDoctor;
export default function Dashboard({ navigation }) {
  const [doctors, setdoctors] = useState<[Doctor]>()
  const [isFetching, setisFetching] = useState(false)

  useEffect(() => {
    setisFetching(true)
    // https://my.api.mockaroo.com/doctors?key=c3d6fbe
    axios.get('https://url.comfsdafas').then((response) => {
      setdoctors(response.data)
    }).catch(() => {
      const _doctors = require('../../mock_data.json')

      setdoctors(_doctors)
    }).finally(() => { setisFetching(false) })
  }, [])


  if (isFetching || doctors && doctors.length == 0) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color='#00000' />
      </View>
    )
  }


  recentDoctor = doctors?.length > 0 ? doctors[0] : null
  console.log("recentDoctor: ", recentDoctor)
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 40 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 26, }}>
          <Text style={styles.title}>Welcome Back, Güven!</Text>
          <Notification opacity={0.5} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 4, paddingHorizontal: 26, }}>
          <Location opacity={0.5} />
          <Text style={styles.location}>Sakarya, Turkey</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 26, paddingHorizontal: 26, }}>
          <View style={styles.search}>
            <Search style={{ marginHorizontal: 16 }} />
            <TextInput
              style={styles.input}
              placeholder='Example “heart”'
            />
          </View>

          <TouchableOpacity style={styles.filter}>
            <Filter fill='#fff' />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10, }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 26 }}>
            {HASH_TAGS.map((name, index) => {
              return (
                <View key={index} style={styles.tagItem}>
                  <Text>#{name}</Text>
                </View>
              )
            })}
          </ScrollView>
        </View>

        <View style={{ marginTop: 30, paddingHorizontal: 26, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.recentLbl}>Recent</Text>
            <Text style={styles.seeAllLbl}>See all</Text>
          </View>
        </View>

        <View style={styles.recentCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={{ uri: recentDoctor?.profile_photo }} style={styles.recentPhoto} />
              <View style={{ paddingLeft: 4, paddingRight: 10, maxWidth: width / 2.5 }}>
                <Text style={{ fontSize: 18, color: '#FFFFFF' }} numberOfLines={2}>Dr. {recentDoctor?.first_name} {recentDoctor?.last_name}</Text>
                <Text style={{ fontSize: 12, color: '#E0EAF9' }}>{recentDoctor?.field}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginRight: 15, paddingTop: 3, marginLeft: 30, }}>
              <Text style={{ paddingRight: 5, textAlign: 'right', fontSize: 12, color: '#E0EAF9' }}>({recentDoctor?.review_count} reviews)</Text>
              <Text style={{ fontSize: 14, color: '#FFFFFF' }}><Text style={{ color: '#F4A3EC' }}>★</Text> {recentDoctor?.rating}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 18 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <Calendar />
                <Text style={{ fontSize: 14, fontFamily: Fonts.interMedium, color: '#fff', textAlign: 'center', paddingTop: 3, paddingLeft: 7 }}>23 Mar</Text>
              </View>

              <View style={{ flexDirection: 'row', marginLeft: 24 }}>
                <Time />
                <Text style={{ fontSize: 14, fontFamily: Fonts.interMedium, color: '#fff', textAlign: 'center', paddingTop: 3, paddingLeft: 7 }}>23 Mar</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 24 }}>
              <Text style={{ fontSize: 14, fontFamily: Fonts.interSemiBold, color: '#fff', textAlign: 'center', paddingTop: 3, paddingLeft: 7 }}>$80</Text>
            </View>
          </View>
        </View>

        <View style={styles.bloodTest}>
          <View style={{ position: 'absolute', width: width, height: 110, zIndex: 9999, right: 0, top: 0 }}>
            <Image source={require('../assets/bloodRect.png')} style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'cover' }} />
          </View>

          <Text style={{ fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#fff' }}>Blood Test</Text>
          <Text style={{ paddingTop: 3, fontSize: 12, fontFamily: Fonts.interMedium, color: '#fff' }}>Duis hendrerit ex nibh, non</Text>
          <View style={{ flexDirection: 'row', marginTop: 14, }}>
            <Calendar />
            <Text style={{ fontSize: 14, fontFamily: Fonts.interMedium, color: '#fff', textAlign: 'center', paddingTop: 3, paddingLeft: 7 }}>23 Mar</Text>
          </View>
        </View>

        <View style={{ marginTop: 31 }}>
          <Text style={{ paddingHorizontal: 26, paddingBottom: 11, fontSize: 18, fontFamily: Fonts.interMedium, color: '#1C1F1E' }}>Categories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 26 }}>
            {CATEGORIES.map((name, index) => {
              return (
                <View key={index} style={styles.categoryItem}>
                  <View style={styles.iconWrapper}>
                    <Image source={require('../assets/teeth.png')} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
                  </View>
                  <Text style={{ paddingTop: 10, fontSize: 12, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>{name}</Text>
                </View>
              )
            })}
          </ScrollView>
        </View>


        <View style={{ marginTop: 30, paddingHorizontal: 26, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
            <Text style={styles.recentLbl}>Popular Doctors</Text>
            <Text onPress={() => navigation.navigate('doctors')} style={styles.seeAllLbl}>See all</Text>
          </View>


          {doctors?.slice(0, 5).map((doctor, index) => (
            <TouchableOpacity onPress={() => navigation.navigate('doctorDetail', { doctor: doctor })}>
              <View style={styles.doctorItem}>
                <Image source={{ uri: doctor.profile_photo }} style={{ marginLeft: 10, width: 50, height: 50, resizeMode: 'contain' }} />
                <View style={{ marginLeft: 15, }}>
                  <Text style={{ fontSize: 18, color: '#1C1F1E', maxWidth: width / 3 }} numberOfLines={2}>Dr. {doctor?.first_name} {doctor?.last_name}</Text>
                  <Text style={{ fontSize: 12, color: '#A7A6A5' }}>{doctor?.field}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 3, }}>
                  <Text style={{ paddingRight: 5, textAlign: 'right', fontSize: 12, color: '#CDCFCE' }}>({doctor?.review_count} reviews)</Text>
                  <Text style={{ fontSize: 14, color: '#000' }}><Text style={{ color: '#1C1F1E' }}>★</Text> {doctor?.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView >
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#F4F6F5'
  },

  title: {
    fontSize: 28,
    fontFamily: Fonts.interSemiBold,
    color: '#1C1F1E'
  },

  location: {
    paddingTop: 2,
    fontSize: 14,
    fontFamily: Fonts.inter,
    color: '#A7A6A5'
  },

  search: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff'
  },

  input: {
    width: width - 150,
  },

  filter: {
    marginLeft: 8,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#66CA98'
  },

  tagItem: {
    marginLeft: 8,
    paddingVertical: 6,
    paddingHorizontal: 17,
    backgroundColor: '#EFF2F1',
    borderRadius: 8,
  },

  recentLbl: {
    fontSize: 18,
    fontFamily: Fonts.interSemiBold,
    color: '#1C1F1E'
  },

  seeAllLbl: {
    fontSize: 12,
    fontFamily: Fonts.interSemiBold,
    color: '#1C1F1E',
  },

  recentCard: {
    marginHorizontal: 26,
    marginTop: 24,
    backgroundColor: '#6295E2',
    borderRadius: 14
  },

  recentPhoto: {
    width: 50,
    height: 50,
    borderRadius: 13,
  },

  bloodTest: {
    marginHorizontal: 26,
    padding: 16,
    marginTop: 6,
    width: width - 26 * 2,
    height: 110,
    borderRadius: 18,
    backgroundColor: '#FF6C52'
  },

  categoryItem: {
    marginRight: 8,
    width: 110,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
  },

  iconWrapper: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#FFF7DC'
  },

  doctorItem: {
    paddingVertical: 13,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    borderRadius: 14,
    backgroundColor: '#fff'
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
