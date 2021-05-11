import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import {Header,Gaps,BottomTabs,Packets} from '../../components'

const Home = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Header/>
      <Gaps/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop:25,marginHorizontal:33}}>
          <Text style={{fontSize:23,fontFamily:'Poppins-SemiBold'}}>Choose your packet</Text>
          <Packets title="soft beauty" price={9000000}/>
          <Packets title="classic elegant" price={9000000}/>
        </View>
      </ScrollView>
      <BottomTabs/>
    </View>
  )
}

export default Home
