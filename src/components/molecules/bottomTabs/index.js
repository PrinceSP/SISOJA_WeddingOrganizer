import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {ProfileUnactive,CartUnactive,Home} from '../../../assets'

const BottomTabs = () => {
  return (
    <View style={{
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:'row',
      width:'100%',
      position:'absolute',
      bottom:0,
      backgroundColor:'#fff'}}>
      <TouchableOpacity>
        <Home/>
      </TouchableOpacity>
      <TouchableOpacity>
        <CartUnactive/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ProfileUnactive/>
      </TouchableOpacity>
    </View>
  )
}

export default BottomTabs
