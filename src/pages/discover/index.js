import React from 'react'
import {View,Text} from 'react-native'
import {Header,Gaps,BottomTabs,Packets} from '../../components'

const Discover = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Header/>
      <Gaps/>
      <Text style={{fontSize:24,fontFamily:'Poppins-SemiBold',position:'absolute',left:33,top:165}}>Choose your packet</Text>
      <Packets title="soft beauty" price={9000000}/>
      <BottomTabs/>
    </View>
  )
}

export default Discover
