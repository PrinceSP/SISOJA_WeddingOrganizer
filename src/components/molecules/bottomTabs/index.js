import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {ProfileUnactive,CartUnactive,Home} from '../../../assets'

const BottomTabs = () => {
  return (
    <View style={{alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'row',
      width:263,
      position:'absolute',
      bottom:0,
      left:50}}>
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
