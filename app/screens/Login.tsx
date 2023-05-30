import { useNavigation } from '@react-navigation/native'
import { render } from '@testing-library/react-native'
import React, { useContext, useState } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, View, ViewProps, TextInput, TextProps, FlatList, FlatListProps, FlatListProperties } from 'react-native'

/* App Scope Problems */

export enum GenderType {
  'male',
  'female'
}

export default function Login({ navigation, route }: any) {
  // navigation: navigate between pages
  // props: data about page ( etc. route.params.variable1)

  // Business Logics + Data
  const [message, setmessage] = useState("")
  const [list, setlist] = useState([])
  const [userType, setuserType] = useState<GenderType>(GenderType.female)

  const onPressSignIn = () => {
    navigation.navigate('signIn', { variable1: 'username' })
  }

  const onPressSignUp = () => { }


  // UI Logic
  // UI Business Logic ( must get data from parent components )
  // UI component directly modified ( etc. card component [extendibility] )
  return <LoginUIPropsObserver
    signUpLabel={message}
    flatList1Item={() => <Text></Text>}
    userType={userType}
  // onpress
  // variables
  />
}

interface ILoginUIPropsObserver {
  signUpLabel: string
  flatList1Item: Element
  userType: GenderType
}

const LoginUIPropsObserver = (props: ILoginUIPropsObserver) => (
  <LoginUI
    productCard1Props={{ text2: { label: props.signUpLabel } }}
    flatList1Props={{
      data: [{ label: "" }, { label: '' }],
      renderItem: ({ item, index }) => <ProductListCardDesignWrapper />
    }}
  />
)




const styles = StyleSheet.create({
  button1: {
    width: 100,
    height: 100
  }
})


interface ILoginUI {
  View1Props?: ViewProps
  button1Props?: PressableProps
  text1Props?: TextProps & { label?: string }
  productCard1Props?: IProductCardUI
  flatList1Props: FlatListProps<IProductListData>
}

// Page UI
const LoginUI = ({ View1Props, button1Props, text1Props, productCard1Props, flatList1Props }: ILoginUI) => {
  return (
    <View {...View1Props}>
      <Pressable {...button1Props} style={[styles.button1, { width: 200, height: 200 }]}>
        <Text style={{ color: 'black' }}>
          Already logged in?
          <Text style={{ color: 'blue' }}>Sign in.</Text>
        </Text>
      </Pressable>
      <ProductCard {...productCard1Props} />
      <TextInput />
      <Text>{text1Props?.label ?? "Text1"}</Text>
      <ProductList
        // item component 
        flatlist1Props={{
          // data: [{ label: "" }, { label: '' }],
          data: flatList1Props.data,
          renderItem: (({ item, index }) => <View><Text>{item.label}</Text></View>)
        }}
      />
    </View>
  )
}





































interface IProductCardUI {
  view1Props?: ViewProps
  text1?: TextProps & { label?: string },
  text2?: TextProps & { label?: string },
}

// Library Components
const ProductCard = (props: IProductCardUI) => (
  <View {...props.view1Props} >
    <Text {...props.text1}>
      {props.text1?.label}
      <Text>{props.text2?.label}</Text>
    </Text>
  </View>
)

interface IProductListCard {
  item: IProductListData
  text1Props?: TextProps & { label: string }
  btn1Props?: PressableProps
}
const ProductListCardDesign = (props: IProductListCard) => (<Pressable {...props.btn1Props}>
  <Text {...props.text1Props}>{props.item.label}</Text>
</Pressable>)

const ProductListCardDesignWrapper = ({ }) => {
  const navigation = useNavigation();
  return (
    <ProductListCardDesign btn1Props={{
      onPress: () => { navigation.navigate('dashboard') }
    }} />
  )
}

interface IProductListData {
  label: string
}
interface IProductList {
  flatlist1Props: FlatListProps<IProductListData>
}

const ProductList = (props: IProductList) => {
  return (
    <FlatList
      {...props.flatlist1Props}
      data={props.flatlist1Props?.data ?? []}
      renderItem={
        props.flatlist1Props?.renderItem ? props.flatlist1Props.renderItem :
          ({ item, index }) => (
            index > 2 ? <ProductListCardDesignWrapper btn1Props={{

            }} item={item} /> : <View key={index}></View>
          )
      }
      keyExtractor={(_, index) => String(index)}
    />
  )
}


/* List Components */
// FlatList ( performant based cases )
// - SectionList ( like GridView )
// ScrollView ( etc. 10 different component render )
// - style: ScrollView Style
// - contentContainerStyle: childern style



// Bottom TabBar >> react-navigation


// TextProps,
// TextPropsIOS,
// TextPropsAndroid,
// AccessibilityProps,
// AccessibilityPropsIOS,
// AccessibilityPropsAndroid,
// TextInputProps,
// TextInputIOSProps,
// TextInputAndroidProps,
// ViewProps,
// ViewPropsIOS,
// ViewPropsAndroid,
// ViewPagerAndroidProps,
// ScrollViewProps,
// ScrollViewPropsIOS,
// ScrollViewPropsAndroid,
// InputAccessoryViewProps,
// NavigatorIOSProps,
// ActivityIndicatorProps,
// ActivityIndicatorIOSProps,
// DatePickerIOSProps,
// DrawerLayoutAndroidProps,
// ProgressBarAndroidProps,
// ProgressViewIOSProps,
// RefreshControlProps,
// RefreshControlPropsIOS,
// RefreshControlPropsAndroid,
// RecyclerViewBackedScrollViewProps,
// SliderProps,
// SliderPropsIOS,
// SliderPropsAndroid,
// SwitchIOSProps,
// ImageSourcePropType,
// ImageProps,
// ImagePropsIOS,
// ImagePropsAndroid,
// ImageBackgroundProps,
// FlatListProps,
// VirtualizedListProps,
// SectionListProps,
// ListViewProps,
// MaskedViewIOSProps,
// ModalProps,
// TouchableWithoutFeedbackProps,
// TouchableHighlightProps,
// TouchableOpacityProps,
// TouchableNativeFeedbackProps,
// TabBarIOSItemProps,
// TabBarIOSProps,
// SnapshotViewIOSProps,
// ButtonProps,
// StatusBarProps,
// StatusBarPropsIOS,
// StatusBarPropsAndroid,
// SwitchProps,
// SwitchPropsIOS,


// Page
// PageDesignWrapper


// Page >> PageDesignWrapper >> PageDesign >> ... ( Components )
//                                         >> Header ( needs data )
//                                         >> List
//                                          >> ListItem



// User's hold
const Page = () => {
  //

  return <PageDesignWrapper />
}

// User's hold
const PageDesignWrapper = () => {
  return <PageDesign />
}

interface IProductListData {
  label: string
}
interface PageDesign {
  flatlist1Props?: FlatListProps<IProductListData>
}
const PageDesign = (props: PageDesign) => (
  <View>
    <Text>Hello</Text>
    <FlatList
      {...props.flatlist1Props}
      data={props.flatlist1Props?.data ?? []}
      renderItem={
        props.flatlist1Props?.renderItem ? props.flatlist1Props.renderItem :
          ({ item, index }) => (
            index > 2 ? <ProductListCardDesignWrapper btn1Props={{

            }} item={item} /> : <View key={index}></View>
          )
      }
      keyExtractor={(_, index) => String(index)}
    />
  </View>
)































