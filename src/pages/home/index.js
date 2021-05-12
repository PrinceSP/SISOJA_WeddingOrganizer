import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import {Header,Gaps,BottomTabs,Packets,Buttons} from '../../components'
import {Packet1,Packet2,Packet3} from '../../assets'
const Home = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Header/>
      <Gaps/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop:25,marginHorizontal:33,marginBottom:100}}>
          <Text style={{fontSize:23,fontFamily:'Poppins-SemiBold'}}>Choose your packet</Text>
          <Packets title="soft beauty"
            price={9000000}
            one='-Catering'
            two='-1 Dress ready stock'
            three='-1 Wedding suit(complete)'
            four='-Manual makeup + Hairdo'
            five='-Photography'
            choose={1}/>
          <Packets title="classic elegant"
            price={12000000}
            one='-1 Dress+Accessories'
            two='-1x Retouch makeup'
            three='-Airbrush makeup + Hairdo'
            four='-Usher Clothes'
            choose={2}/>
          <Packets title="sparkling beauty"
            price={16000000}
            one='-1 Dress+Accessories'
            two='-1x Retouch makeup'
            three='-Airbrush makeup + Hairdo'
            four='-Catering'
            choose={3}/>
        </View>
      </ScrollView>
      <BottomTabs/>
    </View>
  )
}

export default Home
