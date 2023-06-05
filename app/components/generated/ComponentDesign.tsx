import { StyleSheet, Text, TextProps, View, ViewProps } from 'react-native'
import React from 'react'

interface IComponentDesign {
  view1Props?: ViewProps
  text1Props?: TextProps & { label: string }
}

export default function ComponentDesign(props: IComponentDesign) {
  return (
    <View {...props.view1Props}>
      <Text {...props.text1Props}>{props.text1Props?.label ?? "ComponentDesign"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})