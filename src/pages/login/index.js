import React from 'react'
import {ScrollView,View,StyleSheet,Text} from 'react-native'
import {LoginBG} from '../../assets'
import {LoginMol} from '../../components'

const Login = ({navigation}) => {
  return (
    <View style={style.container}>
      <LoginBG/>
      <Text style={style.title}>Wedding</Text>
      <LoginMol/>
    </View>
  )
}

export default Login

const style = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
    flexDirection:'column',
  },
  title:{
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:150,
    fontSize: 74,
    fontFamily:"Sofia-Regular",
    color:"#fff",
    textShadowColor: '#ff2131',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 25
  }
})
