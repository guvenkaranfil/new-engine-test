/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let minTotalProfit = 0;
let maxTotalProfit = 0;
let money = 15_000;

import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const App = () => {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>


        <DataTable>
          <DataTable.Header>
            <DataTable.Title >Date</DataTable.Title>
            <DataTable.Title numeric>Open Price</DataTable.Title>
            <DataTable.Title numeric>1% Profit</DataTable.Title>
            <DataTable.Title numeric>Max Profit</DataTable.Title>
            <DataTable.Title numeric>Diff Profit</DataTable.Title>
            <DataTable.Title numeric>Low distance</DataTable.Title>
          </DataTable.Header>

          {days.map((day, index) => {
            const open = day.values[0]
            const high = day.values[1]
            const low  = day.values[2]
            const minProfit = open * 0.01
            const isMinProfitPossible = (high - ((open + low) / 2)) > minProfit
            const maxProfit = high - open


            const minTotalLotCount = money / open
            minTotalProfit += minProfit * minTotalLotCount;
            money += minProfit * minTotalLotCount

            const maxTotalLotCount = money / open
            maxTotalProfit += maxProfit * maxTotalLotCount
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{day.date}</DataTable.Cell>
                <DataTable.Cell numeric>{open}</DataTable.Cell>
                <DataTable.Cell textStyle={{ color: isMinProfitPossible ? 'green' : 'red' }} numeric>{(minProfit).toFixed(2)}</DataTable.Cell>
                <DataTable.Cell numeric>{(maxProfit).toFixed(2)}</DataTable.Cell>
                {/* <DataTable.Cell numeric>{-(maxProfit - minProfit).toFixed(2)}</DataTable.Cell> */}
                <DataTable.Cell numeric>{(high).toFixed(2)}</DataTable.Cell>
                <DataTable.Cell numeric>{(open - low).toFixed(2)}</DataTable.Cell>
              </DataTable.Row>
            )
          })}

          <DataTable.Pagination
            page={page}
            numberOfPages={3}
            onPageChange={(page) => setPage(page)}
            label={"1 of " + days.length}
            // @ts-ignore
            optionsPerPage={optionsPerPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            showFastPagination
            optionsLabel={'Rows per page'}
          />
        </DataTable>
        <Text>MinTP:{minTotalProfit.toFixed(2)}
          <Text>{"\t"}%{((money + minTotalProfit - money) / money * 100).toFixed(2)}</Text>
        </Text>
        <Text>MaxTP:{maxTotalProfit.toFixed(2)}
          <Text>{"\t"}%{((money + maxTotalProfit - money) / money * 100).toFixed(2)}</Text>
        </Text>
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  days: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dayTitle: {

  },
  day: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  red: {
    backgroundColor: 'red',
    color: 'white'
  },
  green: {
    backgroundColor: 'green',
    color: 'white'
  }
});

export default App;

// values[0]: Open
// values[1]: High
// values[2]: Low
// values[3]: Close


const dayB = 332.30
const days = [
  {
    "date": "01.08.2022",
    values: [268.7, 275., 267, 273]
  },
  {
    "date": "02.08.2022",
    values: [273.5, 275.8, 268.5, 270.8]
  },
  {
    "date": "03.08.2022",
    values: [273, 274.8, 271.5, 273.9]
  },
  {
    "date": "04.08.2022",
    values: [275, 276.9, 270.4, 270.4]
  },
  {
    "date": "05.08.2022",
    values: [271.5, 272.3, 265.7, 269]
  },
  {
    "date": "08.08.2022",
    values: [271.1, 274.9, 270.7, 273.5]
  },
  {
    "date": "09.08.2022",
    values: [274.2, 285, 273.4, 284.7]
  },
  {
    "date": "10.08.2022",
    values: [285, 287.2, 282.9, 284.3]
  },
  {
    "date": "11.08.2022",
    values: [287.1, 298.3, 287, 292]
  },
  {
    "date": "12.08.2022",
    values: [294.6, 296, 291.2, 293.6]
  },
  {
    "date": "15.08.2022",
    values: [296, 297, 283.1, 287.5]
  },
  {
    "date": "16.08.2022",
    values: [300, 302, 288.5, 299]
  },
  {
    "date": "17.08.2022",
    values: [301.3, 306.7, 297.6]
  },
  {
    "date": "18.08.2022",
    values: [305.9, 330.4, 304.7, 329]
  },
  {
    "date": "19.08.2022",
    values: [329.1, 340.3, 326, 326.9]
  },
  {
    "date": "22.08.2022",
    values: [320.3, 331.4, 317.1, 323.2]
  },
  {
    "date": "23.08.2022",
    values: [323.2, 341.4, 322.9, 340.9]
  },
  {
    "date": "24.08.2022",
    values: [342.5, 349.6, 337.8, 341.0]
  },
  {
    "date": "25.08.2022",
    values: [343.5, 351.8, 341.6, 348.6]
  },
  {
    "date": "26.08.2022",
    values: [349.9, 353.7, 340.3, 343.7]
  }
]



