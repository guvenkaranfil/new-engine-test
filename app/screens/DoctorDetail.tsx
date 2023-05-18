import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity, Dimensions, ScrollView, Image, ImageBackground, Pressable } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft, ArrowRight, Calendar, Chat, Elipses, Filter, Hospital, Location, Notification, Phone, Point, Search, Time } from '../../icons'
import Fonts from '../helpers/Fonts'
import { Doctor } from './Doctors'
import { Appointment, Schedule } from './Dashboard'

const { width } = Dimensions.get('window')

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export default function DoctorDetail({ navigation, route }) {
  const doctor: Doctor = route.params.doctor;
  console.log("detail doc: ", doctor)
  const [selectedDay, setselectedDay] = useState<Schedule>()
  const [selectedTime, setselectedTime] = useState<Appointment | undefined>()

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ backgroundColor: '#F4F6F5', paddingBottom: 50 }}>
      <View style={{ paddingTop: 60, width: width, height: 235, backgroundColor: 'white', borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 26, }}>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()}>
            <ArrowLeft style={{ marginTop: 3 }} width={10} height={15} />
            <Text style={{ paddingLeft: 10, fontSize: 16, fontFamily: Fonts.interMedium }}>Back</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 26, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <View style={{ zIndex: 999, borderRadius: 5, position: 'absolute', bottom: 0, left: 0, flexDirection: 'row', backgroundColor: '#fff' }}>
                <Text style={{ padding: 6, fontSize: 16, fontFamily: Fonts.interSemiBold, color: '#000' }}><Text style={{ color: '#1C1F1E' }}>★</Text> {doctor?.rating}</Text>
              </View>
              <Image source={{ uri: doctor.profile_photo }} style={{ width: 130, height: 130, resizeMode: 'contain' }} />
            </View>
            <View style={{ paddingLeft: 10, maxWidth: width / 3 }}>
              <Text style={{ fontSize: 18, color: '#1C1F1E' }} numberOfLines={2}>Dr. {doctor?.first_name} {doctor?.last_name}</Text>
              <Text style={{ fontSize: 12, color: '#A7A6A5' }}>{doctor?.field}</Text>

              <View style={{ flexDirection: 'row', marginTop: 20, }}>
                <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: '#66CA98', alignItems: 'center', justifyContent: 'center' }}>
                  <Chat />
                </View>

                <View style={{ marginLeft: 14, width: 40, height: 40, borderRadius: 12, backgroundColor: '#6295E2', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone />
                </View>
              </View>
            </View>
          </View>

          <View style={{ width: 60, alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: 34, }}>
            <Elipses />
            <Text style={{ fontSize: 28, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>$80</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 22, paddingHorizontal: 26, }}>
        <View>
          <Text style={{ textAlign: 'center', paddingBottom: 12, fontSize: 14, fontFamily: Fonts.interMedium, color: '#A7A6A5' }}>Patients</Text>
          <View style={{ width: (width - 80) / 3, height: 60, borderRadius: 8, backgroundColor: '#EFF2F1', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>+{doctor.patient_count}</Text>
          </View>
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ textAlign: 'center', paddingBottom: 12, fontSize: 14, fontFamily: Fonts.interMedium, color: '#A7A6A5' }}>Experiences</Text>
          <View style={{ width: (width - 80) / 3, height: 60, borderRadius: 8, backgroundColor: '#EFF2F1', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>+{doctor.patient_count}</Text>
          </View>
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ textAlign: 'center', paddingBottom: 12, fontSize: 14, fontFamily: Fonts.interMedium, color: '#A7A6A5' }}>Ratings</Text>
          <View style={{ width: (width - 80) / 3, height: 60, borderRadius: 8, backgroundColor: '#EFF2F1', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>+{doctor.patient_count}</Text>
          </View>
        </View>

      </View>

      <Text style={{ paddingHorizontal: 26, paddingBottom: 11, paddingTop: 30, fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>Schedule</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 26 }}>
        {doctor.schedule?.map((schedule, index) => {
          return (
            <TouchableOpacity onPress={() => {
              setselectedDay(schedule)
              setselectedTime(undefined)
            }}>
              <View key={index} style={[styles.scheduleItem, schedule.day === selectedDay?.day ? styles.inActiveItem : null]}>
                <Text style={[schedule.day === selectedDay?.day ? styles.activeLbl : styles.inActiveLbl]}>{schedule.day.slice(0, 2)}</Text>
                <Text style={[schedule.day === selectedDay?.day ? styles.monthLbl : styles.inActiveMonthLbl]}>{monthNames[parseInt(schedule.day.slice(3, 5))]}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

      {selectedDay && <><Text style={{ paddingHorizontal: 26, paddingBottom: 11, paddingTop: 30, fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>Time</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 26 }}>
          {selectedDay?.appointment?.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => setselectedTime(item)} disabled={item.is_booked} style={{ opacity: item.is_booked ? 0.5 : 1 }}>
                <View key={index} style={[styles.scheduleItem, item.time === selectedTime?.time ? styles.inActiveItem : null]}>
                  <Text style={[item.time === selectedTime?.time ? styles.activeLbl : styles.inActiveLbl]}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </>}

      {selectedDay && selectedTime && <TouchableOpacity style={styles.makeAppointment}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginTop: 7, width: 8, height: 8, borderRadius: 4, backgroundColor: '#fff' }} />
            <Text style={{ paddingLeft: 8, fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#fff' }}>Make appointment</Text>
          </View>
        </Pressable>

        <View style={{ flexDirection: 'row' }}>
          <ArrowRight width={8} height={15} style={{ opacity: 0.5 }} />
          <ArrowRight width={8} height={15} />
        </View>
      </TouchableOpacity>}

      <Text style={{ paddingHorizontal: 26, paddingBottom: 11, paddingTop: 30, fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>About</Text>
      <Text style={{ paddingHorizontal: 26, paddingBottom: 11, paddingTop: 5, fontSize: 14, fontFamily: Fonts.interSemiBold, color: '#A7A6A5' }}>{doctor.about}</Text>

      <Text style={{ paddingHorizontal: 26, paddingBottom: 11, paddingTop: 30, fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>Location</Text>
      <View style={{ paddingHorizontal: 26, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <Location />
          <Text style={{ fontSize: 14, fontFamily: Fonts.interMedium, color: '#A7A6A5', paddingTop: 3, paddingLeft: 10 }}>{doctor.location.address}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
          <Hospital />
          <Text style={{ fontSize: 14, fontFamily: Fonts.interMedium, color: '#A7A6A5', paddingTop: 3, paddingLeft: 10 }}>{doctor.location.name}</Text>
        </View>
      </View>
    </ScrollView >
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

  scheduleItem: {
    marginRight: 8,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  inActiveItem: {
    backgroundColor: '#66CA98',
  },

  activeLbl: {
    fontSize: 18,
    fontFamily: Fonts.interSemiBold,
    color: '#fff'
  },

  inActiveLbl: {
    fontSize: 18,
    fontFamily: Fonts.interSemiBold,
    color: '#1C1F1E'
  },

  monthLbl: {
    paddingTop: 2,
    fontSize: 14,
    fontFamily: Fonts.interSemiBold,
    color: '#fff'
  },

  inActiveMonthLbl: {
    paddingTop: 2,
    fontSize: 14,
    fontFamily: Fonts.interSemiBold,
    color: '#A7A6A5'
  },

  makeAppointment: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    marginHorizontal: 26,
    marginTop: 30,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#66CA98'
  }
})



