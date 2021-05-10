import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Footer = () => {
  const style = StyleSheet.create({
    text:{
      color:'#777'
    }
  })
  return (
    <View style={{position:'absolute',alignItems:'center',bottom:20}}>
      <Text style={style.text}>By continuing, you agree to our</Text>
      <Text style={style.text}>Terms of Service · Privacy Policy · Content Policy</Text>
    </View>
  )
}

export default Footer
