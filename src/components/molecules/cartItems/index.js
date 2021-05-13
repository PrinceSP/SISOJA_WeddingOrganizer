import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Items = ({title,price,text}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{price}</Text>
      <Text>{text}</Text>
    </View>
  )
}

export default Items
