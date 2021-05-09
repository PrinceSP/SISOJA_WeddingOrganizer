import React from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import {Buttons} from '../../components'
import {GetStartedBG} from '../../assets'

const GetStarted = ({navigation})=>{
  return(
    <View style={style.container}>
      <GetStartedBG/>
      <Text style={style.title}>Love Can Change Your World</Text>
      <Buttons top={550} width={204} position='absolute' color="#000" title='Get Started' bgColor='#fff' radius={50} height={70} onPress={()=>navigation.replace('Login')}/>
    </View>
  )
}

export default GetStarted

const style = StyleSheet.create({
  container:{
    alignItems:'center',
    flexDirection:'column',
    flex:1,
    position:'relative'
  },
  title:{
    fontFamily:"Sofia-Regular",
    textAlign:'center',
    zIndex:1,
    position:'absolute',
    fontSize:58,
    color:"#fff",
    textShadowColor: '#C68989',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 25,
    marginTop:25
  }
})
