import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList, ActivityIndicator, Text } from "react-native";

let currentCountryPage = 1;
let maxCount;
export default function App() {
  const [cities, setcities] = useState([]);
  const [isCitiesLoading, setisCitiesLoading] = useState(false);

  useEffect(() => {
    getCities(currentCountryPage);
  }, [])

  const getCities = (currentCountryPage) => {
    if (maxCount === cities?.length) return;

    try {
      setisCitiesLoading(true);
    fetch(`https://example.com/countries?offset=${currentCountryPage * 20}&limit=20}`)
    .then(res => res.json())
    .then(data => {
      if (data.count !== currentCountryPage * 20) {
        setcities([...cities, ...data.results])
        maxCount = data.count;
      }
    })

    } catch {

    } finally {
      setisCitiesLoading(false);
    }
  };

  const _renderFooter = () => {
    if (isCitiesLoading) {
      return (
        <ActivityIndicator size={'small'}  color='#000'/>
      )
    }

    return null;
  }

  if (cities?.length <= 0) {
    return  <ActivityIndicator size={'small'}  color='#000'/>
  }

  return (
  <View style={styles.container}>
    <FlatList
      style={styles.list}
      data={cities}
      renderItem={({item}) => {
        return (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
          </View>
        )
      }}
      ListFooterComponent={_renderFooter}
      keyExtractor={(_, index) => String(index)}
      onEndReachedThreshold={0.9}
      onEndReached={() => {
        if (cities) {
          
        }
        currentCountryPage++
        getCities(currentCountryPage)
      }}
    />
  </View>);
}

// You can also use class components if you like.
// Just remove above functional component and uncomment below class component:
// export default class App extends React.Component {
//   // Write your logic here ...
//
//   render() {
//     return (
//       <View style={styles.container}>
//          <FlatList
//            style={styles.list}
//            data={[]}
//            renderItem={() => <View style={styles.listItem}></View>}
//          />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    height: "100%",
  },
  listItem: {
    width: "100%",
    height: "40px",
    padding: "8px",
    alignItems: "flexStart",
  },
});
