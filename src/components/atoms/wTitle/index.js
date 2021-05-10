import React from 'react'
import {Text,StyleSheet} from 'react-native'

const WeddingTitle = () => {
  return (
    <Text style={style.title}>Wedding</Text>
  )
}

export default WeddingTitle

const style=StyleSheet.create({
  title:{
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:50,
    fontSize: 74,
    fontFamily:"Sofia-Regular",
    color:"#fff",
    textShadowColor: '#ff2131',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 25
  }
})
