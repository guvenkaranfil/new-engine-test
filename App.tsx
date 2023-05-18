import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


import Dashboard from './app/screens/Dashboard';

import GettingStarted from './app/screens/auth/GettingStarted';
import PickUserType from './app/screens/auth/PickUserType';
import AboutYourself from './app/screens/auth/AboutYourself';
import SignIn from './app/screens/auth/SignIn';
import SignUp from './app/screens/auth/SignUp';
import ApproveCode from './app/screens/auth/ApproveCode';

import { LogBox } from 'react-native';
import { Chat, Home, Patient, Plus, Receipt } from './icons';
import Doctors from './app/screens/Doctors';
import DoctorDetail from './app/screens/DoctorDetail';

//Ignore all log notifications
LogBox.ignoreAllLogs();

const ICONS = [
  <Home width={25} height={25} />,
  <Receipt width={25} height={25} />,
  null,
  <Chat width={25} height={25} />,
  <Patient width={25} height={25} fill='#000' />,
]
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{
      flexDirection: 'row', height: 90, borderTopLeftRadius: 32, borderTopRightRadius: 32, backgroundColor: 'white', shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {route.name === 'dashboard3' ?
              <View style={{ flex: 1, alignItems: 'center', paddingTop: 17 }}>
                <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: '#66CA98', alignItems: 'center', justifyContent: 'center' }}>
                  <Plus fill='#fff' />
                </View>
              </View>
              : <View style={{ flex: 1, alignItems: 'center', paddingTop: 28, opacity: isFocused ? 1 : 0.5 }}>
                {ICONS[index]}
              </View>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen options={{}} name="dashboard" component={Dashboard} />
    <Stack.Screen options={{ headerShown: false }} name="doctors" component={Doctors} />
    <Stack.Screen options={{ headerShown: false }} name="doctorDetail" component={DoctorDetail} />
  </Stack.Navigator>
)

export default function App() {
  const [isAuthCompleted, setisAuthCompleted] = useState(true)

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {isAuthCompleted ?

          <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: 'transparent' } }} tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen options={{}} name="dashboard" component={HomeStack} />
            <Tab.Screen options={{}} name="dashboard2" component={Dashboard} />
            <Tab.Screen options={{}} name="dashboard3" component={Dashboard} />
            <Tab.Screen options={{}} name="dashboard4" component={Dashboard} />
            <Tab.Screen options={{}} name="dashboard5" component={Dashboard} />
          </Tab.Navigator>
          :
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="gettingStarted" component={GettingStarted} />
            <Stack.Screen options={{ headerShown: false }} name="pickUserType" component={PickUserType} />
            <Stack.Screen options={{ headerShown: false }} name="aboutYourself" component={AboutYourself} />
            <Stack.Screen options={{ headerShown: false }} name="signIn" component={SignIn} />
            <Stack.Screen options={{ headerShown: false }} name="signUp" component={SignUp} />
            <Stack.Screen options={{ headerShown: false }} name="approveCode" component={() => <ApproveCode isAuthCompleted={setisAuthCompleted} />} />

          </Stack.Navigator>}
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F5'
  }
})







// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * Generated with the TypeScript template
//  * https://github.com/react-native-community/react-native-template-typescript
//  *
//  * @format
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   Dimensions
// } from 'react-native';

// const {width, height} = Dimensions.get('window');
// console.log('Screen width: ', width)
// console.log('Screen height: ', height)

// let minTotalProfit = 0;
// let maxTotalProfit = 0;
// let averageTotalProfit = 0;
// let money = 13_000;

// import { getBetweenDates } from './app/helpers';
// console.log(getBetweenDates("25 Aug '22", "22 Aug '22")?.length)

// import { DataTable } from 'react-native-paper';

// const optionsPerPage = [2, 3, 4];

// const App = () => {
//   const [page, setPage] = React.useState<number>(0);
//   const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

//   React.useEffect(() => {
//     setPage(0);

//     let totalMoney = 10_000;
//     for (let i = 1; i < 21; i++) {
//       let profit = totalMoney * 0.01;
//       totalMoney += profit;

//     }
//     console.log('totalMoney:', totalMoney);
//     console.log('diff:', totalMoney - 10_000);

//   }, [itemsPerPage]);


//   React.useEffect(() => {
//     let startMoney = 15_000
//     for (let i = 0; i < tprslow.length; i++) {
//       const day = tprslow[i];

//       // Calculation Average


//     }
//   }, [])

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle={'dark-content'} />
//       <ScrollView>


//         <DataTable>
//           <DataTable.Header>
//             <DataTable.Title >Date</DataTable.Title>
//             <DataTable.Title numeric>Low</DataTable.Title>
//             <DataTable.Title numeric>Open</DataTable.Title>
//             <DataTable.Title numeric>High</DataTable.Title>
//             <DataTable.Title numeric>Close</DataTable.Title>
//             <DataTable.Title numeric>%1 Profit</DataTable.Title>
//             <DataTable.Title numeric>Max Profit</DataTable.Title>
//             {/* <DataTable.Title numeric>Average</DataTable.Title> */}
//           </DataTable.Header>

//           {getBetweenDates("25 Aug '22", "22 Aug '22").map((day, index) => {
//             console.log(day.time);


//             const open = Number(day.open)
//             const high = Number(day.high)
//             const low = Number(day.low)
//             const minProfit = open * 0.01
//             const isMinProfitPossible = (high - open) > minProfit
//             const maxProfit = high - open


//             return (
//               <DataTable.Row key={index}>
//                 <DataTable.Cell >{day.date.slice(0, 6)} - {day.time}</DataTable.Cell>
//                 <DataTable.Cell numeric>{low}</DataTable.Cell>
//                 <DataTable.Cell numeric>{open}</DataTable.Cell>
//                 <DataTable.Cell numeric>{high}</DataTable.Cell>
//                 <DataTable.Cell numeric>{day.close}</DataTable.Cell>
//                 <DataTable.Cell textStyle={{ color: isMinProfitPossible ? 'green' : 'red' }} numeric>{(minProfit).toFixed(2)}</DataTable.Cell>
//                 <DataTable.Cell numeric>{(maxProfit).toFixed(2)}</DataTable.Cell>
//                 {/* <DataTable.Cell numeric>{((minProfit + maxProfit) / 2).toFixed(2)}</DataTable.Cell> */}
//               </DataTable.Row>
//             )
//           })}

//           <DataTable.Pagination
//             page={page}
//             numberOfPages={3}
//             onPageChange={(page) => setPage(page)}
//             label={"1 of " + tprslow.length}
//             // @ts-ignore
//             optionsPerPage={optionsPerPage}
//             itemsPerPage={itemsPerPage}
//             setItemsPerPage={setItemsPerPage}
//             showFastPagination={false}
//             optionsLabel={'Rows per page'}
//           />
//         </DataTable>
//         <Text>MinTP:{minTotalProfit.toFixed(0)}
//           <Text>{"\t"}%{((money + minTotalProfit - money) / money * 100).toFixed(2)}</Text>
//         </Text>
//         <Text>MaxTP:{maxTotalProfit.toFixed(0)}
//           <Text>{"\t"}%{((money + maxTotalProfit - money) / money * 100).toFixed(2)}</Text>
//         </Text>
//       </ScrollView>
//     </SafeAreaView >
//   );
// };

// const styles = StyleSheet.create({
//   days: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   dayTitle: {

//   },
//   day: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly'
//   },
//   red: {
//     backgroundColor: 'red',
//     color: 'white'
//   },
//   green: {
//     backgroundColor: 'green',
//     color: 'white'
//   }
// });

// export default App;

// // values[0]: Open
// // values[1]: High
// // values[2]: Low
// // values[3]: Close


// const dayB = 332.30
// const days = [
//   {
//     "date": "01.08.2022",
//     values: [268.7, 275., 267, 273]
//   },
//   {
//     "date": "02.08.2022",
//     values: [273.5, 275.8, 268.5, 270.8]
//   },
//   {
//     "date": "03.08.2022",
//     values: [273, 274.8, 271.5, 273.9]
//   },
//   {
//     "date": "04.08.2022",
//     values: [275, 276.9, 270.4, 270.4]
//   },
//   {
//     "date": "05.08.2022",
//     values: [271.5, 272.3, 265.7, 269]
//   },
//   {
//     "date": "08.08.2022",
//     values: [271.1, 274.9, 270.7, 273.5]
//   },
//   {
//     "date": "09.08.2022",
//     values: [274.2, 285, 273.4, 284.7]
//   },
//   {
//     "date": "10.08.2022",
//     values: [285, 287.2, 282.9, 284.3]
//   },
//   {
//     "date": "11.08.2022",
//     values: [287.1, 298.3, 287, 292]
//   },
//   {
//     "date": "12.08.2022",
//     values: [294.6, 296, 291.2, 293.6]
//   },
//   {
//     "date": "15.08.2022",
//     values: [296, 297, 283.1, 287.5]
//   },
//   {
//     "date": "16.08.2022",
//     values: [300, 302, 288.5, 299]
//   },
//   {
//     "date": "17.08.2022",
//     values: [301.3, 306.7, 297.6]
//   },
//   {
//     "date": "18.08.2022",
//     values: [305.9, 330.4, 304.7, 329]
//   },
//   {
//     "date": "19.08.2022",
//     values: [329.1, 340.3, 326, 326.9]
//   },
//   {
//     "date": "22.08.2022",
//     values: [320.3, 331.4, 317.1, 323.2]
//   },
//   {
//     "date": "23.08.2022",
//     values: [323.2, 341.4, 322.9, 340.9]
//   },
//   {
//     "date": "24.08.2022",
//     values: [342.5, 349.6, 337.8, 341.0]
//   },
//   {
//     "date": "25.08.2022",
//     values: [343.5, 351.8, 341.6, 348.6]
//   },
//   {
//     "date": "26.08.2022",
//     values: [349.9, 353.7, 340.3, 343.7]
//   }
// ]






// const fordDays = [
//   {
//     "date": "22.06.2022",
//     values: [302, 318.4, 299.8, 309.6]
//   },
//   {
//     "date": "23.06.2022",
//     values: [310, 312.7, 302, 302]
//   },
//   {
//     "date": "24.06.2022",
//     values: [303.4, 306., 297.7, 299]
//   },
//   {
//     "date": "27.06.2022",
//     values: [293, 301.8, 289.2, 299]
//   },
//   {
//     "date": "28.06.2022",
//     values: [300, 303, 286.2, 288]
//   },
//   {
//     "date": "29.06.2022",
//     values: [287.9, 287.9, 271.1, 271.1]
//   },
//   {
//     "date": "30.06.2022",
//     values: [271.5, 272.8, 263.3, 267]
//   },
//   {
//     "date": "01.07.2022",
//     values: [272.5, 276.8, 268.6, 271.5]
//   },
//   {
//     "date": "04.07.2022",
//     values: [274.5, 277.9, 265.6, 265.6]
//   },
//   {
//     "date": "05.07.2022",
//     values: [267.6, 268.5, 255.3, 256.2]
//   },
//   // {
//   //   "date": "06.07.2022",
//   //   values: [258, 264.4, 256.3, 264.3]
//   // },
//   // {
//   //   "date": "07.07.2022",
//   //   values: [264.5, 271, 262.4, 270.1]
//   // },
//   // {
//   //   "date": "08.07.2022",
//   //   values: [269.9, 275.3, 268.6, 274]
//   // },
//   // {
//   //   "date": "13.07.2022",
//   //   values: [273.9, 275, 260.3, 262.5]
//   // },
//   // {
//   //   "date": "14.07.2022",
//   //   values: [261.7, 263.2, 255.8, 258]
//   // },
// ]

// const tprslow = [{
//   "date": "04 Jul '22",
//   "open": "270.0",
//   "high": "274.7",
//   "low": "264.4",
//   "close": "264.5",
//   "change": "−4.0 (−1.49%)",
//   "volume": "3.752M"
// },
// {
//   "date": "01 Jul '22",
//   "open": "264.5",
//   "high": "274.0",
//   "low": "263.4",
//   "close": "268.5",
//   "change": "+4.0 (+1.51%)",
//   "volume": "3.994M"
// },
// {
//   "date": "30 Jun '22",
//   "open": "262.4",
//   "high": "266.7",
//   "low": "257.4",
//   "close": "264.5",
//   "change": "+2.2 (+0.84%)",
//   "volume": "4.364M"
// },
// {
//   "date": "29 Jun '22",
//   "open": "265.7",
//   "high": "271.5",
//   "low": "260.4",
//   "close": "262.3",
//   "change": "−4.9 (−1.83%)",
//   "volume": "3.51M"
// },
// {
//   "date": "28 Jun '22",
//   "open": "274.9",
//   "high": "278.9",
//   "low": "263.9",
//   "close": "267.2",
//   "change": "−5.7 (−2.09%)",
//   "volume": "4.11M"
// },
// {
//   "date": "27 Jun '22",
//   "open": "259.6",
//   "high": "273.3",
//   "low": "258.5",
//   "close": "272.9",
//   "change": "+6.0 (+2.25%)",
//   "volume": "3.68M"
// },
// {
//   "date": "24 Jun '22",
//   "open": "267.6",
//   "high": "270.3",
//   "low": "264.5",
//   "close": "266.9",
//   "change": "+0.3 (+0.11%)",
//   "volume": "2.463M"
// },
// {
//   "date": "23 Jun '22",
//   "open": "266.6",
//   "high": "272.4",
//   "low": "265.0",
//   "close": "266.6",
//   "change": "+0.1 (+0.04%)",
//   "volume": "3.424M"
// },
// {
//   "date": "22 Jun '22",
//   "open": "264.9",
//   "high": "267.5",
//   "low": "261.4",
//   "close": "266.5",
//   "change": "−0.8 (−0.30%)",
//   "volume": "2.737M"
// },
// {
//   "date": "21 Jun '22",
//   "open": "262.6",
//   "high": "269.0",
//   "low": "260.6",
//   "close": "267.3",
//   "change": "+6.9 (+2.65%)",
//   "volume": "3.213M"
// },
// {
//   "date": "20 Jun '22",
//   "open": "269.4",
//   "high": "270.8",
//   "low": "257.1",
//   "close": "260.4",
//   "change": "−8.0 (−2.98%)",
//   "volume": "4.572M"
// },
// {
//   "date": "17 Jun '22",
//   "open": "263.9",
//   "high": "271.9",
//   "low": "263.3",
//   "close": "268.4",
//   "change": "+4.6 (+1.74%)",
//   "volume": "2.97M"
// },
// {
//   "date": "16 Jun '22",
//   "open": "267.8",
//   "high": "270.3",
//   "low": "260.7",
//   "close": "263.8",
//   "change": "−3.6 (−1.35%)",
//   "volume": "2.286M"
// },
// {
//   "date": "15 Jun '22",
//   "open": "270.4",
//   "high": "271.6",
//   "low": "266.6",
//   "close": "267.4",
//   "change": "−3.0 (−1.11%)",
//   "volume": "1.873M"
// },
// {
//   "date": "14 Jun '22",
//   "open": "273.3",
//   "high": "273.7",
//   "low": "264.0",
//   "close": "270.4",
//   "change": "−1.2 (−0.44%)",
//   "volume": "2.591M"
// },
// {
//   "date": "13 Jun '22",
//   "open": "268.4",
//   "high": "273.9",
//   "low": "267.5",
//   "close": "271.6",
//   "change": "+2.6 (+0.97%)",
//   "volume": "2.529M"
// },
// {
//   "date": "10 Jun '22",
//   "open": "276.0",
//   "high": "279.5",
//   "low": "268.5",
//   "close": "269.0",
//   "change": "−9.7 (−3.48%)",
//   "volume": "2.583M"
// },
// {
//   "date": "09 Jun '22",
//   "open": "271.7",
//   "high": "278.7",
//   "low": "270.5",
//   "close": "278.7",
//   "change": "+7.5 (+2.77%)",
//   "volume": "3.777M"
// },
// {
//   "date": "08 Jun '22",
//   "open": "288.1",
//   "high": "294.6",
//   "low": "270.0",
//   "close": "271.2",
//   "change": "−15.2 (−5.31%)",
//   "volume": "4.284M"
// }]

// const tprs100 = [
//   {
//     "date": "29 Aug '22",
//     "open": "342.0",
//     "high": "363.7",
//     "low": "340.5",
//     "close": "361.1",
//     "change": "+17.4 (+5.06%)",
//     "volume": "6.241M"
//   },
//   {
//     "date": "26 Aug '22",
//     "open": "349.9",
//     "high": "353.7",
//     "low": "340.3",
//     "close": "343.7",
//     "change": "−4.9 (−1.41%)",
//     "volume": "4.988M"
//   },
//   {
//     "date": "25 Aug '22",
//     "open": "343.5",
//     "high": "351.8",
//     "low": "341.6",
//     "close": "348.6",
//     "change": "+7.6 (+2.23%)",
//     "volume": "4.8M"
//   },
//   {
//     "date": "24 Aug '22",
//     "open": "342.5",
//     "high": "349.6",
//     "low": "337.8",
//     "close": "341.0",
//     "change": "+0.1 (+0.03%)",
//     "volume": "5.984M"
//   },
//   {
//     "date": "23 Aug '22",
//     "open": "323.2",
//     "high": "341.4",
//     "low": "322.9",
//     "close": "340.9",
//     "change": "+17.7 (+5.48%)",
//     "volume": "6.433M"
//   },
//   {
//     "date": "22 Aug '22",
//     "open": "320.3",
//     "high": "331.4",
//     "low": "317.1",
//     "close": "323.2",
//     "change": "−3.7 (−1.13%)",
//     "volume": "6.548M"
//   },
//   {
//     "date": "19 Aug '22",
//     "open": "329.1",
//     "high": "340.3",
//     "low": "326.0",
//     "close": "326.9",
//     "change": "−2.1 (−0.64%)",
//     "volume": "8.987M"
//   },
//   {
//     "date": "18 Aug '22",
//     "open": "305.9",
//     "high": "330.4",
//     "low": "304.7",
//     "close": "329.0",
//     "change": "+23.5 (+7.69%)",
//     "volume": "9.849M"
//   },
//   {
//     "date": "17 Aug '22",
//     "open": "301.3",
//     "high": "306.7",
//     "low": "297.6",
//     "close": "305.5",
//     "change": "+5.6 (+1.87%)",
//     "volume": "7.596M"
//   },
//   {
//     "date": "16 Aug '22",
//     "open": "300.0",
//     "high": "302.0",
//     "low": "288.5",
//     "close": "299.9",
//     "change": "+12.4 (+4.31%)",
//     "volume": "15.871M"
//   },
//   {
//     "date": "15 Aug '22",
//     "open": "296.0",
//     "high": "297.0",
//     "low": "283.1",
//     "close": "287.5",
//     "change": "−6.1 (−2.08%)",
//     "volume": "3.855M"
//   },
//   {
//     "date": "12 Aug '22",
//     "open": "294.6",
//     "high": "296.0",
//     "low": "291.2",
//     "close": "293.6",
//     "change": "+1.6 (+0.55%)",
//     "volume": "3.624M"
//   },
//   {
//     "date": "11 Aug '22",
//     "open": "287.1",
//     "high": "298.3",
//     "low": "287.0",
//     "close": "292.0",
//     "change": "+7.7 (+2.71%)",
//     "volume": "5.964M"
//   },
//   {
//     "date": "10 Aug '22",
//     "open": "285.0",
//     "high": "287.2",
//     "low": "282.9",
//     "close": "284.3",
//     "change": "−0.4 (−0.14%)",
//     "volume": "3.372M"
//   },
//   {
//     "date": "09 Aug '22",
//     "open": "274.2",
//     "high": "285.0",
//     "low": "273.4",
//     "close": "284.7",
//     "change": "+11.2 (+4.10%)",
//     "volume": "6.611M"
//   },
//   {
//     "date": "08 Aug '22",
//     "open": "271.1",
//     "high": "274.9",
//     "low": "270.7",
//     "close": "273.5",
//     "change": "+4.5 (+1.67%)",
//     "volume": "3.791M"
//   },
//   {
//     "date": "05 Aug '22",
//     "open": "271.5",
//     "high": "272.3",
//     "low": "265.7",
//     "close": "269.0",
//     "change": "−1.4 (−0.52%)",
//     "volume": "3.332M"
//   },
//   {
//     "date": "04 Aug '22",
//     "open": "275.0",
//     "high": "276.9",
//     "low": "270.4",
//     "close": "270.4",
//     "change": "−2.6 (−0.95%)",
//     "volume": "3.57M"
//   },
//   {
//     "date": "03 Aug '22",
//     "open": "273.0",
//     "high": "274.8",
//     "low": "271.5",
//     "close": "273.0",
//     "change": "+2.2 (+0.81%)",
//     "volume": "2.67M"
//   },
//   {
//     "date": "02 Aug '22",
//     "open": "273.5",
//     "high": "275.8",
//     "low": "268.5",
//     "close": "270.8",
//     "change": "−2.2 (−0.81%)",
//     "volume": "3.907M"
//   },
//   {
//     "date": "01 Aug '22",
//     "open": "268.7",
//     "high": "275.0",
//     "low": "267.0",
//     "close": "273.0",
//     "change": "+4.6 (+1.71%)",
//     "volume": "4.279M"
//   },
//   {
//     "date": "29 Jul '22",
//     "open": "257.5",
//     "high": "268.4",
//     "low": "256.0",
//     "close": "268.4",
//     "change": "+11.1 (+4.31%)",
//     "volume": "4.83M"
//   },
//   {
//     "date": "01 Aug '22",
//     "open": "268.7",
//     "high": "275.0",
//     "low": "267.0",
//     "close": "273.0",
//     "change": "+4.6 (+1.71%)",
//     "volume": "4.279M"
//   },
//   {
//     "date": "29 Jul '22",
//     "open": "257.5",
//     "high": "268.4",
//     "low": "256.0",
//     "close": "268.4",
//     "change": "+11.1 (+4.31%)",
//     "volume": "4.83M"
//   },
//   {
//     "date": "28 Jul '22",
//     "open": "260.0",
//     "high": "263.3",
//     "low": "257.0",
//     "close": "257.3",
//     "change": "−0.1 (−0.04%)",
//     "volume": "3.539M"
//   },
//   {
//     "date": "27 Jul '22",
//     "open": "259.4",
//     "high": "260.5",
//     "low": "255.3",
//     "close": "257.4",
//     "change": "−0.4 (−0.16%)",
//     "volume": "2.657M"
//   },
//   {
//     "date": "26 Jul '22",
//     "open": "256.1",
//     "high": "264.7",
//     "low": "256.0",
//     "close": "257.8",
//     "change": "+4.8 (+1.90%)",
//     "volume": "3.042M"
//   },
//   {
//     "date": "25 Jul '22",
//     "open": "247.5",
//     "high": "253.3",
//     "low": "247.2",
//     "close": "253.0",
//     "change": "+4.9 (+1.98%)",
//     "volume": "1.821M"
//   },
//   {
//     "date": "22 Jul '22",
//     "open": "252.0",
//     "high": "254.3",
//     "low": "246.7",
//     "close": "248.1",
//     "change": "−1.0 (−0.40%)",
//     "volume": "2.614M"
//   },
//   {
//     "date": "21 Jul '22",
//     "open": "255.0",
//     "high": "256.0",
//     "low": "248.3",
//     "close": "249.1",
//     "change": "−5.4 (−2.12%)",
//     "volume": "3.201M"
//   },
//   {
//     "date": "20 Jul '22",
//     "open": "244.7",
//     "high": "254.5",
//     "low": "242.6",
//     "close": "254.5",
//     "change": "+9.9 (+4.05%)",
//     "volume": "3.516M"
//   },
//   {
//     "date": "19 Jul '22",
//     "open": "242.0",
//     "high": "250.4",
//     "low": "240.6",
//     "close": "244.6",
//     "change": "+1.1 (+0.45%)",
//     "volume": "3.957M"
//   },
//   {
//     "date": "18 Jul '22",
//     "open": "234.0",
//     "high": "243.5",
//     "low": "233.2",
//     "close": "243.5",
//     "change": "+15.7 (+6.89%)",
//     "volume": "3.702M"
//   },
//   {
//     "date": "14 Jul '22",
//     "open": "233.3",
//     "high": "235.3",
//     "low": "227.7",
//     "close": "227.8",
//     "change": "−5.4 (−2.32%)",
//     "volume": "2.639M"
//   },
//   {
//     "date": "13 Jul '22",
//     "open": "239.9",
//     "high": "239.9",
//     "low": "231.0",
//     "close": "233.2",
//     "change": "−9.9 (−4.07%)",
//     "volume": "3.34M"
//   },
//   {
//     "date": "07 Jul '22",
//     "open": "246.0",
//     "high": "247.0",
//     "low": "238.3",
//     "close": "244.6",
//     "change": "−0.2 (−0.08%)",
//     "volume": "5.17M"
//   },
//   {
//     "date": "06 Jul '22",
//     "open": "255.2",
//     "high": "255.8",
//     "low": "242.6",
//     "close": "244.8",
//     "change": "−10.4 (−4.08%)",
//     "volume": "5.006M"
//   },
//   {
//     "date": "05 Jul '22",
//     "open": "265.2",
//     "high": "266.6",
//     "low": "253.2",
//     "close": "255.2",
//     "change": "−9.3 (−3.52%)",
//     "volume": "2.601M"
//   },
//   {
//     "date": "04 Jul '22",
//     "open": "270.0",
//     "high": "274.7",
//     "low": "264.4",
//     "close": "264.5",
//     "change": "−4.0 (−1.49%)",
//     "volume": "3.752M"
//   },
//   {
//     "date": "01 Jul '22",
//     "open": "264.5",
//     "high": "274.0",
//     "low": "263.4",
//     "close": "268.5",
//     "change": "+4.0 (+1.51%)",
//     "volume": "3.994M"
//   },
//   {
//     "date": "30 Jun '22",
//     "open": "262.4",
//     "high": "266.7",
//     "low": "257.4",
//     "close": "264.5",
//     "change": "+2.2 (+0.84%)",
//     "volume": "4.364M"
//   },
//   {
//     "date": "29 Jun '22",
//     "open": "265.7",
//     "high": "271.5",
//     "low": "260.4",
//     "close": "262.3",
//     "change": "−4.9 (−1.83%)",
//     "volume": "3.51M"
//   },
//   {
//     "date": "28 Jun '22",
//     "open": "274.9",
//     "high": "278.9",
//     "low": "263.9",
//     "close": "267.2",
//     "change": "−5.7 (−2.09%)",
//     "volume": "4.11M"
//   },
//   {
//     "date": "27 Jun '22",
//     "open": "259.6",
//     "high": "273.3",
//     "low": "258.5",
//     "close": "272.9",
//     "change": "+6.0 (+2.25%)",
//     "volume": "3.68M"
//   },
//   {
//     "date": "24 Jun '22",
//     "open": "267.6",
//     "high": "270.3",
//     "low": "264.5",
//     "close": "266.9",
//     "change": "+0.3 (+0.11%)",
//     "volume": "2.463M"
//   },
//   {
//     "date": "23 Jun '22",
//     "open": "266.6",
//     "high": "272.4",
//     "low": "265.0",
//     "close": "266.6",
//     "change": "+0.1 (+0.04%)",
//     "volume": "3.424M"
//   },
//   {
//     "date": "22 Jun '22",
//     "open": "264.9",
//     "high": "267.5",
//     "low": "261.4",
//     "close": "266.5",
//     "change": "−0.8 (−0.30%)",
//     "volume": "2.737M"
//   },
//   {
//     "date": "21 Jun '22",
//     "open": "262.6",
//     "high": "269.0",
//     "low": "260.6",
//     "close": "267.3",
//     "change": "+6.9 (+2.65%)",
//     "volume": "3.213M"
//   },
//   {
//     "date": "20 Jun '22",
//     "open": "269.4",
//     "high": "270.8",
//     "low": "257.1",
//     "close": "260.4",
//     "change": "−8.0 (−2.98%)",
//     "volume": "4.572M"
//   },
//   {
//     "date": "17 Jun '22",
//     "open": "263.9",
//     "high": "271.9",
//     "low": "263.3",
//     "close": "268.4",
//     "change": "+4.6 (+1.74%)",
//     "volume": "2.97M"
//   },
//   {
//     "date": "16 Jun '22",
//     "open": "267.8",
//     "high": "270.3",
//     "low": "260.7",
//     "close": "263.8",
//     "change": "−3.6 (−1.35%)",
//     "volume": "2.286M"
//   },
//   {
//     "date": "15 Jun '22",
//     "open": "270.4",
//     "high": "271.6",
//     "low": "266.6",
//     "close": "267.4",
//     "change": "−3.0 (−1.11%)",
//     "volume": "1.873M"
//   },
//   {
//     "date": "14 Jun '22",
//     "open": "273.3",
//     "high": "273.7",
//     "low": "264.0",
//     "close": "270.4",
//     "change": "−1.2 (−0.44%)",
//     "volume": "2.591M"
//   },
//   {
//     "date": "13 Jun '22",
//     "open": "268.4",
//     "high": "273.9",
//     "low": "267.5",
//     "close": "271.6",
//     "change": "+2.6 (+0.97%)",
//     "volume": "2.529M"
//   },
//   {
//     "date": "10 Jun '22",
//     "open": "276.0",
//     "high": "279.5",
//     "low": "268.5",
//     "close": "269.0",
//     "change": "−9.7 (−3.48%)",
//     "volume": "2.583M"
//   },
//   {
//     "date": "09 Jun '22",
//     "open": "271.7",
//     "high": "278.7",
//     "low": "270.5",
//     "close": "278.7",
//     "change": "+7.5 (+2.77%)",
//     "volume": "3.777M"
//   },
//   {
//     "date": "08 Jun '22",
//     "open": "288.1",
//     "high": "294.6",
//     "low": "270.0",
//     "close": "271.2",
//     "change": "−15.2 (−5.31%)",
//     "volume": "4.284M"
//   },
//   {
//     "date": "07 Jun '22",
//     "open": "282.5",
//     "high": "286.5",
//     "low": "278.6",
//     "close": "286.4",
//     "change": "+4.9 (+1.74%)",
//     "volume": "3.088M"
//   },
//   {
//     "date": "06 Jun '22",
//     "open": "276.0",
//     "high": "284.5",
//     "low": "276.0",
//     "close": "281.5",
//     "change": "+7.2 (+2.62%)",
//     "volume": "3.681M"
//   },
//   {
//     "date": "03 Jun '22",
//     "open": "272.0",
//     "high": "276.5",
//     "low": "271.7",
//     "close": "274.3",
//     "change": "+3.3 (+1.22%)",
//     "volume": "3.988M"
//   },
//   {
//     "date": "02 Jun '22",
//     "open": "272.0",
//     "high": "272.7",
//     "low": "268.3",
//     "close": "271.0",
//     "change": "−0.4 (−0.15%)",
//     "volume": "3.463M"
//   },
//   {
//     "date": "01 Jun '22",
//     "open": "274.0",
//     "high": "277.5",
//     "low": "270.5",
//     "close": "271.4",
//     "change": "+0.3 (+0.11%)",
//     "volume": "4.295M"
//   },
//   {
//     "date": "31 May '22",
//     "open": "268.0",
//     "high": "280.0",
//     "low": "267.6",
//     "close": "271.1",
//     "change": "+12.1 (+4.67%)",
//     "volume": "11.598M"
//   },
//   {
//     "date": "30 May '22",
//     "open": "253.6",
//     "high": "260.9",
//     "low": "253.6",
//     "close": "259.0",
//     "change": "+8.6 (+3.43%)",
//     "volume": "4.138M"
//   },
//   {
//     "date": "27 May '22",
//     "open": "254.5",
//     "high": "256.2",
//     "low": "250.2",
//     "close": "250.4",
//     "change": "−4.7 (−1.84%)",
//     "volume": "2.895M"
//   },
//   {
//     "date": "26 May '22",
//     "open": "249.4",
//     "high": "258.0",
//     "low": "247.4",
//     "close": "255.1",
//     "change": "+5.7 (+2.29%)",
//     "volume": "3.856M"
//   },
//   {
//     "date": "25 May '22",
//     "open": "245.1",
//     "high": "250.3",
//     "low": "245.1",
//     "close": "249.4",
//     "change": "+5.0 (+2.05%)",
//     "volume": "2.47M"
//   },
//   {
//     "date": "24 May '22",
//     "open": "248.7",
//     "high": "250.8",
//     "low": "244.0",
//     "close": "244.4",
//     "change": "−4.2 (−1.69%)",
//     "volume": "2.388M"
//   },
//   {
//     "date": "23 May '22",
//     "open": "250.0",
//     "high": "250.3",
//     "low": "242.0",
//     "close": "248.6",
//     "change": "+0.6 (+0.24%)",
//     "volume": "3.333M"
//   },
//   {
//     "date": "20 May '22",
//     "open": "249.7",
//     "high": "252.9",
//     "low": "248.0",
//     "close": "248.0",
//     "change": "−3.0 (−1.20%)",
//     "volume": "2.415M"
//   },
//   {
//     "date": "18 May '22",
//     "open": "257.0",
//     "high": "258.8",
//     "low": "251.0",
//     "close": "251.0",
//     "change": "−6.0 (−2.33%)",
//     "volume": "3.122M"
//   },
//   {
//     "date": "17 May '22",
//     "open": "258.5",
//     "high": "260.6",
//     "low": "255.4",
//     "close": "257.0",
//     "change": "+0.3 (+0.12%)",
//     "volume": "3.673M"
//   },
//   {
//     "date": "18 May '22",
//     "open": "257.0",
//     "high": "258.8",
//     "low": "251.0",
//     "close": "251.0",
//     "change": "−6.0 (−2.33%)",
//     "volume": "3.122M"
//   },
//   {
//     "date": "17 May '22",
//     "open": "258.5",
//     "high": "260.6",
//     "low": "255.4",
//     "close": "257.0",
//     "change": "+0.3 (+0.12%)",
//     "volume": "3.673M"
//   },
//   {
//     "date": "16 May '22",
//     "open": "257.0",
//     "high": "262.0",
//     "low": "256.6",
//     "close": "256.7",
//     "change": "+0.5 (+0.20%)",
//     "volume": "4.588M"
//   },
//   {
//     "date": "13 May '22",
//     "open": "254.1",
//     "high": "257.9",
//     "low": "252.6",
//     "close": "256.2",
//     "change": "+3.9 (+1.55%)",
//     "volume": "4.95M"
//   },
//   {
//     "date": "12 May '22",
//     "open": "249.0",
//     "high": "254.8",
//     "low": "245.0",
//     "close": "252.3",
//     "change": "+0.5 (+0.20%)",
//     "volume": "8.03M"
//   },
//   {
//     "date": "11 May '22",
//     "open": "246.5",
//     "high": "252.0",
//     "low": "243.6",
//     "close": "251.8",
//     "change": "+6.3 (+2.57%)",
//     "volume": "7.81M"
//   },
//   {
//     "date": "10 May '22",
//     "open": "246.5",
//     "high": "251.4",
//     "low": "243.6",
//     "close": "245.5",
//     "change": "+0.2 (+0.08%)",
//     "volume": "5.316M"
//   },
//   {
//     "date": "09 May '22",
//     "open": "251.9",
//     "high": "253.4",
//     "low": "243.1",
//     "close": "245.3",
//     "change": "−9.9 (−3.88%)",
//     "volume": "7.824M"
//   },
//   {
//     "date": "06 May '22",
//     "open": "243.3",
//     "high": "255.2",
//     "low": "242.5",
//     "close": "255.2",
//     "change": "+9.9 (+4.04%)",
//     "volume": "7.885M"
//   },
//   {
//     "date": "05 May '22",
//     "open": "243.4",
//     "high": "250.0",
//     "low": "242.5",
//     "close": "245.3",
//     "change": "+11.1 (+4.74%)",
//     "volume": "5.79M"
//   },
//   {
//     "date": "29 Apr '22",
//     "open": "239.3",
//     "high": "240.5",
//     "low": "233.0",
//     "close": "234.2",
//     "change": "−3.8 (−1.60%)",
//     "volume": "6.054M"
//   },
//   {
//     "date": "28 Apr '22",
//     "open": "246.1",
//     "high": "249.1",
//     "low": "238.0",
//     "close": "238.0",
//     "change": "−7.5 (−3.05%)",
//     "volume": "4.171M"
//   },
//   {
//     "date": "27 Apr '22",
//     "open": "245.0",
//     "high": "247.2",
//     "low": "240.6",
//     "close": "245.5",
//     "change": "+0.5 (+0.20%)",
//     "volume": "5.185M"
//   },
//   {
//     "date": "26 Apr '22",
//     "open": "259.0",
//     "high": "259.0",
//     "low": "242.5",
//     "close": "245.0",
//     "change": "−14.4 (−5.55%)",
//     "volume": "7.413M"
//   },
//   {
//     "date": "25 Apr '22",
//     "open": "252.0",
//     "high": "261.3",
//     "low": "249.2",
//     "close": "259.4",
//     "change": "+5.4 (+2.13%)",
//     "volume": "5.494M"
//   },
//   {
//     "date": "22 Apr '22",
//     "open": "258.6",
//     "high": "261.6",
//     "low": "250.6",
//     "close": "254.0",
//     "change": "−3.5 (−1.36%)",
//     "volume": "6.897M"
//   },
//   {
//     "date": "21 Apr '22",
//     "open": "254.5",
//     "high": "258.8",
//     "low": "254.5",
//     "close": "257.5",
//     "change": "+3.0 (+1.18%)",
//     "volume": "4.242M"
//   },
//   {
//     "date": "20 Apr '22",
//     "open": "256.5",
//     "high": "259.0",
//     "low": "253.0",
//     "close": "254.5",
//     "change": "−1.3 (−0.51%)",
//     "volume": "6.068M"
//   },
//   {
//     "date": "19 Apr '22",
//     "open": "252.3",
//     "high": "257.8",
//     "low": "252.2",
//     "close": "255.8",
//     "change": "+4.3 (+1.71%)",
//     "volume": "8.517M"
//   },
//   {
//     "date": "18 Apr '22",
//     "open": "260.1",
//     "high": "262.2",
//     "low": "250.9",
//     "close": "251.5",
//     "change": "−8.2 (−3.16%)",
//     "volume": "7.088M"
//   },
//   {
//     "date": "15 Apr '22",
//     "open": "259.5",
//     "high": "262.9",
//     "low": "259.0",
//     "close": "259.7",
//     "change": "+0.5 (+0.19%)",
//     "volume": "2.708M"
//   },
//   {
//     "date": "14 Apr '22",
//     "open": "259.0",
//     "high": "261.4",
//     "low": "254.4",
//     "close": "259.2",
//     "change": "+3.0 (+1.17%)",
//     "volume": "4.523M"
//   },
//   {
//     "date": "13 Apr '22",
//     "open": "257.0",
//     "high": "264.0",
//     "low": "255.9",
//     "close": "256.2",
//     "change": "+2.9 (+1.14%)",
//     "volume": "7.322M"
//   },
//   {
//     "date": "12 Apr '22",
//     "open": "247.0",
//     "high": "254.4",
//     "low": "245.5",
//     "close": "253.3",
//     "change": "+6.6 (+2.68%)",
//     "volume": "7.105M"
//   },
//   {
//     "date": "11 Apr '22",
//     "open": "244.2",
//     "high": "246.8",
//     "low": "240.6",
//     "close": "246.7",
//     "change": "+2.5 (+1.02%)",
//     "volume": "5.322M"
//   },
//   {
//     "date": "08 Apr '22",
//     "open": "240.2",
//     "high": "245.2",
//     "low": "240.0",
//     "close": "244.2",
//     "change": "+5.8 (+2.43%)",
//     "volume": "4.815M"
//   },
//   {
//     "date": "07 Apr '22",
//     "open": "242.0",
//     "high": "242.9",
//     "low": "237.8",
//     "close": "238.4",
//     "change": "−2.3 (−0.96%)",
//     "volume": "5.045M"
//   },
//   {
//     "date": "06 Apr '22",
//     "open": "240.3",
//     "high": "247.9",
//     "low": "239.8",
//     "close": "240.7",
//     "change": "−0.3 (−0.12%)",
//     "volume": "6.537M"
//   },
//   {
//     "date": "05 Apr '22",
//     "open": "243.0",
//     "high": "247.3",
//     "low": "238.3",
//     "close": "241.0",
//     "change": "−0.9 (−0.37%)",
//     "volume": "7.276M"
//   }
// ]



//   // var arr = []
//   // const a = setInterval(() => {
//   //   console.log(document.getElementsByClassName("chart-data-window-item-value")[0]?.innerText)
//   //   let lastVal = arr[arr.length - 1]?.date;
//   //   if (lastVal != document.getElementsByClassName("chart-data-window-item-value")[0].innerText) {
//   //     const date = document.getElementsByClassName("chart-data-window-item-value")[0].innerText
//   //     const open = document.getElementsByClassName("chart-data-window-item-value")[1].innerText
//   //     const high = document.getElementsByClassName("chart-data-window-item-value")[2].innerText
//   //     const low = document.getElementsByClassName("chart-data-window-item-value")[3].innerText
//   //     const close = document.getElementsByClassName("chart-data-window-item-value")[4].innerText
//   //     const change = document.getElementsByClassName("chart-data-window-item-value")[5].innerText
//   //     const volume = document.getElementsByClassName("chart-data-window-item-value")[6].innerText

//   //     arr.push({
//   //       date: date,
//   //       open: open,
//   //       high: high,
//   //       low: low,
//   //       close: close,
//   //       change: change,
//   //       volume: volume
//   //     })
//   //   }

//   //   if (arr.length > 100) clearInterval(a)
//   // }, 10)

//   // var arr = []
//   // const a = setInterval(() => {
//   //   console.log(document.getElementsByClassName("chart-data-window-item-value")[0]?.innerText)
//   //   let lastVal = arr[arr.length - 1];
//   //   const date = document.getElementsByClassName("chart-data-window-item-value")[0].innerText
//   //   const time = document.getElementsByClassName("chart-data-window-item-value")[1].innerText
//   //   const open = document.getElementsByClassName("chart-data-window-item-value")[2].innerText
//   //   const high = document.getElementsByClassName("chart-data-window-item-value")[3].innerText
//   //   const low = document.getElementsByClassName("chart-data-window-item-value")[4].innerText
//   //   const close = document.getElementsByClassName("chart-data-window-item-value")[5].innerText
//   //   const change = document.getElementsByClassName("chart-data-window-item-value")[6].innerText
//   //   const volume = document.getElementsByClassName("chart-data-window-item-value")[7].innerText

//   //   if (lastVal?.date != date || lastVal?.time != time) {

//   //     arr.push({
//   //       date: date,
//   //       time: time,
//   //       open: open,
//   //       high: high,
//   //       low: low,
//   //       close: close,
//   //       change: change,
//   //       volume: volume
//   //     })
//   //   }

//   //   if (date == "02 Sep '22") clearInterval(a)
//   // }, 1)


