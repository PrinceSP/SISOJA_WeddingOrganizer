import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

const Login = ({navigation}) => {
  return (
    <View>
      <Text style={style.title}>Wedding</Text>
    </View>
  )
}

export default Login

const style = StyleSheet.create({
  title:{
    fontSize: 64,
    fontFamily:"Sofia-Regular"
  }
})
