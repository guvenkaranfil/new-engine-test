import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Fonts from '../helpers/Fonts'
/* fonts */
export const FontFamily = {
  sFProDisplaySemibold: Fonts.interSemiBold,
  h128SemiBold: Fonts.interSemiBold,
  b514Medium: Fonts.interSemiBold,
  interRegular: Fonts.interSemiBold,
  sFProRegular: Fonts.interSemiBold,
  sFProBold: Fonts.interSemiBold,
  bodyRegular: Fonts.interSemiBold,
};
/* font sizes */
export const FontSize = {
  b514Medium_size: 14,
  h128SemiBold_size: 28,
  h416Semibold_size: 16,
  size_6xl: 25,
  bodyRegular_size: 17,
  caption2Regular_size: 11,
};
/* Colors */
export const Color = {
  grayscale4: "#f4f6f5",
  grayscale3: "#eff2f1",
  systemColoursLabelColourPrimaryLight: "#000",
  grayscale1: "#1c1f1e",
  grayscale2: "#a7a6a5",
  accentPrimary1: "#66ca98",
};
/* border radiuses */
export const Border = {
  br_xs: 12,
  br_8xs: 5,
  br_12xs: 1,
};


const YourCode = () => {
  return (
    <View style={styles.yourCode}>
      <View style={styles.keyAndSuggestions}>
        <View style={styles.background} />
        <View style={[styles.keyboardSuggestionIphone, styles.keySpaceBlock]}>
          <View style={[styles.divider, styles.dividerLayout]} />
          <View style={[styles.text, styles.textSpaceBlock]}>
            <Text style={[styles.fromMessages, styles.codeTypo1]}>
              From Messages
            </Text>
            <Text style={[styles.code, styles.codeTypo1]}>1427</Text>
          </View>
          <View style={[styles.divider1, styles.textSpaceBlock]} />
        </View>
        {/* <View style={[styles.key, styles.keySpaceBlock]}>
          <View style={styles.keys}>
            <View style={[styles.view, styles.viewPosition5]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background.png")}
              />
              <Text style={[styles.number, styles.numberPosition]}>0</Text>
            </View>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/10.png")}
            />
            <View style={[styles.view1, styles.viewPosition3]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background1.png")}
              />
              <Text style={[styles.number1, styles.numberPosition]}>9</Text>
            </View>
            <View style={[styles.view2, styles.viewPosition4]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background2.png")}
              />
              <Text style={[styles.number1, styles.numberPosition]}>8</Text>
            </View>
            <View style={[styles.view3, styles.viewPosition2]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background3.png")}
              />
              <Text style={[styles.number1, styles.numberPosition]}>7</Text>
            </View>
            <View style={[styles.view4, styles.viewPosition1]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background1.png")}
              />
              <Text style={[styles.number1, styles.numberPosition]}>6</Text>
            </View>
            <View style={[styles.view5, styles.viewPosition1]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background2.png")}
              />
              <Text style={[styles.number1, styles.numberPosition]}>5</Text>
            </View>
            <View style={[styles.view6, styles.viewPosition1]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background3.png")}
              />
              <Text style={[styles.number1, styles.numberPosition]}>4</Text>
            </View>
            <View style={[styles.view7, styles.viewPosition]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background4.png")}
              />
              <Text style={[styles.number, styles.numberPosition]}>3</Text>
            </View>
            <View style={[styles.view8, styles.viewPosition]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background.png")}
              />
              <Text style={[styles.number, styles.numberPosition]}>2</Text>
            </View>
            <View style={[styles.view9, styles.viewPosition]}>
              <Image
                style={[styles.keyBackgroundIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/key-background5.png")}
              />
              <Text style={[styles.label, styles.numberPosition]}>{` `}</Text>
              <Text style={[styles.number, styles.numberPosition]}>1</Text>
            </View>
          </View>
        </View> */}
      </View>
      {/* <View style={styles.verify}>
        <Text style={styles.verify1}>Verify</Text>
      </View>
      <View style={[styles.view10, styles.code1Position]}>
        <Text style={[styles.resendCodeClickContainer, styles.codeTypo]}>
          <Text style={styles.resendCode}>{`Resend Code? `}</Text>
          <Text style={[styles.clickHere, styles.text1Typo]}>Click here</Text>
        </Text>
        <Text style={[styles.text1, styles.text1Typo]}>(2:10)</Text>
      </View>
      <View style={[styles.code1, styles.code1Position]}>
        <View style={styles.viewLayout}>
          <View style={[styles.child, styles.viewLayout]} />
          <Text style={[styles.text2, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.view12, styles.viewLayout]}>
          <View style={[styles.child, styles.viewLayout]} />
          <Text style={[styles.text3, styles.textTypo]}>4</Text>
        </View>
        <View style={[styles.view12, styles.viewLayout]}>
          <View style={[styles.child, styles.viewLayout]} />
          <Text style={[styles.text4, styles.textTypo]}>2</Text>
        </View>
        <View style={[styles.view12, styles.viewLayout]}>
          <View style={[styles.child, styles.viewLayout]} />
          <Text style={[styles.text4, styles.textTypo]}>7</Text>
        </View>
      </View>
      <Text style={[styles.codeSendTo, styles.text1Typo]}>
        Code send to yor Email
      </Text>
      <Text style={[styles.yourCode1, styles.yourCode1Position]}>
        Your Code
      </Text>
      <Image
        style={[styles.logoMedicine145, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/logo-medicine-1-4-5.png")}
      />
      <View style={[styles.systemBar, styles.yourCode1Position]}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>
            <Text style={styles.text6}>9:4</Text>1
          </Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  keySpaceBlock: {
    marginTop: -6,
    alignSelf: "stretch",
  },
  dividerLayout: {
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 1,
    backgroundColor: Color.grayscale2,
    borderRadius: Border.br_12xs,
  },
  textSpaceBlock: {
    marginLeft: 132,
    height: 25,
  },
  codeTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
    letterSpacing: 0,
  },
  viewPosition5: {
    left: "33.88%",
    right: "33.88%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  numberPosition: {
    width: 124,
    left: 0,
    color: Color.grayscale1,
    textAlign: "center",
    position: "absolute",
  },
  viewPosition3: {
    left: "67.77%",
    right: "0%",
  },
  viewPosition4: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition2: {
    right: "67.77%",
    left: "0%",
  },
  viewPosition1: {
    bottom: "51.69%",
    top: "25.6%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "77.78%",
    top: "0%",
    width: "32.23%",
    height: "22.22%",
    position: "absolute",
  },
  code1Position: {
    left: 26,
    position: "absolute",
  },
  codeTypo: {
    textAlign: "left",
    fontSize: FontSize.b514Medium_size,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.b514Medium,
    fontWeight: "500",
  },
  viewLayout: {
    height: 79,
    width: 79,
  },
  textTypo: {
    lineHeight: 38,
    fontSize: FontSize.h128SemiBold_size,
    fontFamily: FontFamily.h128SemiBold,
    color: Color.grayscale1,
    textAlign: "center",
  },
  yourCode1Position: {
    left: "6.28%",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  background: {
    height: "130.23%",
    width: "106.41%",
    top: "-3.88%",
    right: "-3.33%",
    bottom: "-26.36%",
    left: "-3.08%",
    backgroundColor: "#e8eaed",
    zIndex: 0,
    position: "absolute",
  },
  divider: {
    height: 25,
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 1,
    backgroundColor: Color.grayscale2,
    borderRadius: Border.br_12xs,
  },
  fromMessages: {
    fontSize: FontSize.caption2Regular_size,
    lineHeight: 13,
    display: "none",
    color: Color.systemColoursLabelColourPrimaryLight,
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
  },
  code: {
    fontSize: FontSize.bodyRegular_size,
    lineHeight: 22,
    marginTop: 1,
    color: Color.grayscale1,
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 132,
    flex: 1,
  },
  divider1: {
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 1,
    backgroundColor: Color.grayscale2,
    borderRadius: Border.br_12xs,
    marginLeft: 132,
  },
  keyboardSuggestionIphone: {
    paddingHorizontal: 30,
    paddingVertical: 13,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  keyBackgroundIcon: {
    height: "100%",
    borderRadius: Border.br_8xs,
    left: "0%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    bottom: "0%",
    width: "100%",
  },
  number: {
    bottom: 8,
    fontFamily: FontFamily.sFProRegular,
    fontSize: FontSize.size_6xl,
    width: 124,
  },
  view: {
    bottom: "0%",
    top: "77.78%",
    width: "32.23%",
    height: "22.22%",
    position: "absolute",
  },
  icon: {
    right: "0.08%",
    left: "67.69%",
    bottom: "0%",
    top: "77.78%",
    width: "32.23%",
    height: "22.22%",
  },
  number1: {
    bottom: 9,
    fontFamily: FontFamily.sFProRegular,
    fontSize: FontSize.size_6xl,
    width: 124,
  },
  view1: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view2: {
    left: "33.88%",
    right: "33.88%",
  },
  view3: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view4: {
    left: "67.77%",
    right: "0%",
  },
  view5: {
    left: "33.88%",
    right: "33.88%",
  },
  view6: {
    right: "67.77%",
    left: "0%",
  },
  view7: {
    left: "67.77%",
    right: "0%",
  },
  view8: {
    left: "33.88%",
    right: "33.88%",
  },
  label: {
    bottom: 5,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: FontFamily.sFProBold,
  },
  view9: {
    right: "67.77%",
    left: "0%",
  },
  keys: {
    height: 207,
    alignSelf: "stretch",
  },
  key: {
    paddingTop: 6,
    zIndex: 2,
  },
  keyAndSuggestions: {
    top: 573,
    left: 12,
    width: 390,
    paddingHorizontal: 3,
    paddingVertical: 0,
    alignItems: "center",
    position: "absolute",
  },
  verify1: {
    fontSize: FontSize.h416Semibold_size,
    color: Color.grayscale4,
    fontFamily: FontFamily.h128SemiBold,
    textAlign: "center",
  },
  verify: {
    top: 486,
    left: 105,
    borderRadius: 18,
    backgroundColor: Color.accentPrimary1,
    paddingHorizontal: 81,
    paddingVertical: 15,
    flexDirection: "row",
    position: "absolute",
  },
  resendCode: {
    fontFamily: FontFamily.interRegular,
    color: Color.grayscale2,
  },
  clickHere: {
    textDecoration: "underline",
    color: Color.accentPrimary1,
  },
  resendCodeClickContainer: {
    left: 51,
    top: 0,
  },
  text1: {
    textAlign: "left",
    fontSize: FontSize.b514Medium_size,
    position: "absolute",
    top: 0,
    left: 0,
    color: Color.grayscale1,
  },
  view10: {
    top: 365,
    width: 218,
    height: 17,
  },
  child: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.grayscale3,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text2: {
    left: 34,
    top: 23,
    lineHeight: 38,
    fontSize: FontSize.h128SemiBold_size,
    position: "absolute",
  },
  text3: {
    left: 31,
    top: 23,
    lineHeight: 38,
    fontSize: FontSize.h128SemiBold_size,
    position: "absolute",
  },
  view12: {
    marginLeft: 15,
  },
  text4: {
    left: 32,
    top: 23,
    lineHeight: 38,
    fontSize: FontSize.h128SemiBold_size,
    position: "absolute",
  },
  code1: {
    top: 270,
    flexDirection: "row",
  },
  codeSendTo: {
    top: 211,
    left: 131,
    color: Color.grayscale2,
    textAlign: "left",
    fontSize: FontSize.b514Medium_size,
    position: "absolute",
  },
  yourCode1: {
    width: "87.44%",
    top: "17.86%",
    lineHeight: 38,
    fontSize: FontSize.h128SemiBold_size,
    fontFamily: FontFamily.h128SemiBold,
    color: Color.grayscale1,
    textAlign: "center",
  },
  logoMedicine145: {
    height: "3.57%",
    width: "7.97%",
    top: "7.59%",
    right: "45.89%",
    bottom: "88.84%",
    left: "46.14%",
  },
  groupIcon: {
    top: 17,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  text6: {
    letterSpacing: 0,
  },
  time: {
    marginTop: -7.5,
    top: "50%",
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplaySemibold,
    fontSize: FontSize.b514Medium_size,
    width: 54,
    left: 0,
    textAlign: "center",
    color: Color.systemColoursLabelColourPrimaryLight,
  },
  starus: {
    height: "47.73%",
    top: "27.27%",
    bottom: "25%",
    left: -15,
  },
  systemBar: {
    height: "4.91%",
    width: "90.58%",
    top: "0.89%",
    right: "3.14%",
    bottom: "94.2%",
  },
  yourCode: {
    backgroundColor: Color.grayscale4,
    height: 896,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default YourCode;


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'

// import { SafeAreaView } from 'react-native-safe-area-context'
// import { Calendar, Filter, Location, Notification, Search, Time } from '../../icons'
// import Fonts from '../helpers/Fonts'

// const { width } = Dimensions.get('window')

// const CATEGORIES = [
//   "Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Hematology", "Neurology", "Oncology", "Pediatrics", "Psychiatry", "Radiology", "Surgery"
// ]

// const HASH_TAGS = [
//   "heart", "teeth", "Surgeon", "eyes", "hematology",
//   "heart", "teeth", "Surgeon", "eyes", "hematology",
//   "heart", "teeth", "Surgeon", "eyes", "hematology",
// ]

// let recentDoctor;
// export default function Dashboard({ navigation }) {
//   const [doctors, setdoctors] = useState<[Doctor]>()
//   const [isFetching, setisFetching] = useState(false)

//   useEffect(() => {
//     setisFetching(true)
//     // https://my.api.mockaroo.com/doctors?key=c3d6fbe
//     axios.get('https://url.comfsdafas').then((response) => {
//       setdoctors(response.data)
//     }).catch(() => {
//       const _doctors = require('../../mock_data.json')

//       setdoctors(_doctors)
//     }).finally(() => { setisFetching(false) })
//   }, [])


//   if (isFetching || doctors && doctors.length == 0) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size={'large'} color='#00000' />
//       </View>
//     )
//   }


//   recentDoctor = doctors?.length > 0 ? doctors[0] : null
//   console.log("recentDoctor: ", recentDoctor)
//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 40 }}>
//       <SafeAreaView style={styles.container}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 26, }}>
//           <Text style={styles.title}>Welcome Back, Güven!</Text>
//           <Notification opacity={0.5} />
//         </View>
//         <View style={{ flexDirection: 'row', marginTop: 4, paddingHorizontal: 26, }}>
//           <Location opacity={0.5} />
//           <Text style={styles.location}>Sakarya, Turkey</Text>
//         </View>

//         <View style={{ flexDirection: 'row', marginTop: 26, paddingHorizontal: 26, }}>
//           <View style={styles.search}>
//             <Search style={{ marginHorizontal: 16 }} />
//             <TextInput
//               style={styles.input}
//               placeholder='Example “heart”'
//             />
//           </View>

//           <TouchableOpacity style={styles.filter}>
//             <Filter fill='#fff' />
//           </TouchableOpacity>
//         </View>

//         <View style={{ marginTop: 10, }}>
//           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 26 }}>
//             {HASH_TAGS.map((name, index) => {
//               return (
//                 <View key={index} style={styles.tagItem}>
//                   <Text>#{name}</Text>
//                 </View>
//               )
//             })}
//           </ScrollView>
//         </View>

//         <View style={{ marginTop: 30, paddingHorizontal: 26, }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             <Text style={styles.recentLbl}>Recent</Text>
//             <Text style={styles.seeAllLbl}>See all</Text>
//           </View>
//         </View>

//         <View style={styles.recentCard}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
//             <View style={{ flexDirection: 'row' }}>
//               <Image source={{ uri: recentDoctor?.profile_photo }} style={styles.recentPhoto} />
//               <View style={{ paddingLeft: 4, paddingRight: 10, maxWidth: width / 2.5 }}>
//                 <Text style={{ fontSize: 18, color: '#FFFFFF' }} numberOfLines={2}>Dr. {recentDoctor?.first_name} {recentDoctor?.last_name}</Text>
//                 <Text style={{ fontSize: 12, color: '#E0EAF9' }}>{recentDoctor?.field}</Text>
//               </View>
//             </View>
//             <View style={{ flexDirection: 'row', marginRight: 15, paddingTop: 3, marginLeft: 30, }}>
//               <Text style={{ paddingRight: 5, textAlign: 'right', fontSize: 12, color: '#E0EAF9' }}>({recentDoctor?.review_count} reviews)</Text>
//               <Text style={{ fontSize: 14, color: '#FFFFFF' }}><Text style={{ color: '#F4A3EC' }}>★</Text> {recentDoctor?.rating}</Text>
//             </View>
//           </View>

//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 18 }}>
//             <View style={{ flexDirection: 'row' }}>
//               <View style={{ flexDirection: 'row' }}>
//                 <Calendar />
//                 <Text style={{ fontSize: 14, fontFamily: Fonts.interMedium, color: '#fff', textAlign: 'center', paddingTop: 3, paddingLeft: 7 }}>23 Mar</Text>
//               </View>

//               <View style={{ flexDirection: 'row', marginLeft: 24 }}>
//                 <Time />
//                 <Text style={{ fontSize: 14, fontFamily: Fonts.interMedium, color: '#fff', textAlign: 'center', paddingTop: 3, paddingLeft: 7 }}>23 Mar</Text>
//               </View>
//             </View>
//             <View style={{ flexDirection: 'row', marginLeft: 24 }}>
//               <Text style={{ fontSize: 14, fontFamily: Fonts.interSemiBold, color: '#fff', textAlign: 'center', paddingTop: 3, paddingLeft: 7 }}>$80</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.bloodTest}>
//           <View style={{ position: 'absolute', width: width, height: 110, zIndex: 9999, right: 0, top: 0 }}>
//             <Image source={require('../assets/bloodRect.png')} style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'cover' }} />
//           </View>

//           <Text style={{ fontSize: 18, fontFamily: Fonts.interSemiBold, color: '#fff' }}>Blood Test</Text>
//           <Text style={{ paddingTop: 3, fontSize: 12, fontFamily: Fonts.interMedium, color: '#fff' }}>Duis hendrerit ex nibh, non</Text>
//           <View style={{ flexDirection: 'row', marginTop: 14, }}>
//             <Calendar />
//             <Text style={{ fontSize: 14, fontFamily: Fonts.interMedium, color: '#fff', textAlign: 'center', paddingTop: 3, paddingLeft: 7 }}>23 Mar</Text>
//           </View>
//         </View>

//         <View style={{ marginTop: 31 }}>
//           <Text style={{ paddingHorizontal: 26, paddingBottom: 11, fontSize: 18, fontFamily: Fonts.interMedium, color: '#1C1F1E' }}>Categories</Text>
//           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 26 }}>
//             {CATEGORIES.map((name, index) => {
//               return (
//                 <View key={index} style={styles.categoryItem}>
//                   <View style={styles.iconWrapper}>
//                     <Image source={require('../assets/teeth.png')} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
//                   </View>
//                   <Text style={{ paddingTop: 10, fontSize: 12, fontFamily: Fonts.interSemiBold, color: '#1C1F1E' }}>{name}</Text>
//                 </View>
//               )
//             })}
//           </ScrollView>
//         </View>


//         <View style={{ marginTop: 30, paddingHorizontal: 26, }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
//             <Text style={styles.recentLbl}>Popular Doctors</Text>
//             <Text onPress={() => navigation.navigate('doctors')} style={styles.seeAllLbl}>See all</Text>
//           </View>


//           {doctors?.slice(0, 5).map((doctor, index) => (
//             <TouchableOpacity onPress={() => navigation.navigate('doctorDetail', { doctor: doctor })}>
//               <View style={styles.doctorItem}>
//                 <Image source={{ uri: doctor.profile_photo }} style={{ marginLeft: 10, width: 50, height: 50, resizeMode: 'contain' }} />
//                 <View style={{ marginLeft: 15, }}>
//                   <Text style={{ fontSize: 18, color: '#1C1F1E', maxWidth: width / 3 }} numberOfLines={2}>Dr. {doctor?.first_name} {doctor?.last_name}</Text>
//                   <Text style={{ fontSize: 12, color: '#A7A6A5' }}>{doctor?.field}</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row', paddingTop: 3, }}>
//                   <Text style={{ paddingRight: 5, textAlign: 'right', fontSize: 12, color: '#CDCFCE' }}>({doctor?.review_count} reviews)</Text>
//                   <Text style={{ fontSize: 14, color: '#000' }}><Text style={{ color: '#1C1F1E' }}>★</Text> {doctor?.rating}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </SafeAreaView >
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   loader: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },

//   container: {
//     flex: 1,
//     backgroundColor: '#F4F6F5'
//   },

//   title: {
//     fontSize: 28,
//     fontFamily: Fonts.interSemiBold,
//     color: '#1C1F1E'
//   },

//   location: {
//     paddingTop: 2,
//     fontSize: 14,
//     fontFamily: Fonts.inter,
//     color: '#A7A6A5'
//   },

//   search: {
//     flex: 1,
//     flexDirection: 'row',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 10,
//     backgroundColor: '#fff'
//   },

//   input: {
//     width: width - 150,
//   },

//   filter: {
//     marginLeft: 8,
//     width: 40,
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 12,
//     backgroundColor: '#66CA98'
//   },

//   tagItem: {
//     marginLeft: 8,
//     paddingVertical: 6,
//     paddingHorizontal: 17,
//     backgroundColor: '#EFF2F1',
//     borderRadius: 8,
//   },

//   recentLbl: {
//     fontSize: 18,
//     fontFamily: Fonts.interSemiBold,
//     color: '#1C1F1E'
//   },

//   seeAllLbl: {
//     fontSize: 12,
//     fontFamily: Fonts.interSemiBold,
//     color: '#1C1F1E',
//   },

//   recentCard: {
//     marginHorizontal: 26,
//     marginTop: 24,
//     backgroundColor: '#6295E2',
//     borderRadius: 14
//   },

//   recentPhoto: {
//     width: 50,
//     height: 50,
//     borderRadius: 13,
//   },

//   bloodTest: {
//     marginHorizontal: 26,
//     padding: 16,
//     marginTop: 6,
//     width: width - 26 * 2,
//     height: 110,
//     borderRadius: 18,
//     backgroundColor: '#FF6C52'
//   },

//   categoryItem: {
//     marginRight: 8,
//     width: 110,
//     height: 90,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 14,
//   },

//   iconWrapper: {
//     width: 44,
//     height: 44,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 6,
//     backgroundColor: '#FFF7DC'
//   },

//   doctorItem: {
//     paddingVertical: 13,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 16,
//     borderRadius: 14,
//     backgroundColor: '#fff'
//   }
// })



// export interface Doctor {
//   id: number;
//   first_name: string;
//   last_name: string;
//   patient_count: number;
//   experience: number;
//   rating: number;
//   field: string;
//   review_count: number;
//   location: Location;
//   about: string;
//   schedule: Schedule[];
//   profile_photo: string;
// }

// export interface Location {
//   latitude: number;
//   longitude: number;
//   name: string;
//   address: string;
// }

// export interface Schedule {
//   day: string;
//   appointment: Appointment[];
// }

// export interface Appointment {
//   time: string;
//   is_booked: boolean;
// }
