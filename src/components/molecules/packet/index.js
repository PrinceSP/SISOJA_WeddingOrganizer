import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Packets = ({title,price}) => {
  const style = StyleSheet.create({
    titles:{
      fontFamily:'Sofia-Regular',
      fontSize:27
    },
    prices:{
      fontFamily:'Sofia-Regular',
      fontSize:14
    }
  })
  return (
    <View>
      <Text>{title}</Text>
      <Text>{`Rp.${price}`}</Text>
    </View>
  )
}

export default Packets
