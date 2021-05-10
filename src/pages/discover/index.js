import React from 'react'
import {View,Text} from 'react-native'
import {Header,Gaps} from '../../components'

const Discover = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Header/>
      <Gaps/>
      <Text style={{fontSize:24,fontFamily:'Poppins-SemiBold',marginTop:65,marginLeft:33}}>Choose your packet</Text>
    </View>
  )
}

export default Discover
