import React from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import {Buttons} from '../../components'
import {GetStartedBG} from '../../assets'
const Splash = ()=>{
  return(
    <View style={style.container}>
      <GetStartedBG style={style.bg}/>
      <Text style={style.title}>Love Can Change Your World</Text>
      <Buttons color="#000" title='Get Started' bgColor='#fff' radius={50} onPress={()=>{
          console.log('Prince');
        }}/>
    </View>
  )
}

export default Splash

const style = StyleSheet.create({
  container:{
    alignItems:'center',
    flexDirection:'column',
    flex:1,
    position:'relative'
  },
  bg:{height:100},
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
