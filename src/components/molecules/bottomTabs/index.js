import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {ProfileUnactive,CartUnactive,Home} from '../../../assets'
import {createBottomTabNavigation} from '@react-navigation/bottom-tabs'

const BottomTabs = ({home,cart,profile}) => {
  return (
    <View style={{
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:'row',
      width:'100%',
      position:'absolute',
      bottom:0,
      backgroundColor:'#fff'}}>
      <TouchableOpacity onPress={home}>
        <Home/>
      </TouchableOpacity>
      <TouchableOpacity onPress={cart}>
        <CartUnactive/>
      </TouchableOpacity>
      <TouchableOpacity onPress={profile}>
        <ProfileUnactive/>
      </TouchableOpacity>
    </View>
  )
}

export default BottomTabs
