import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Burger} from '../../../assets'

const Header = ({title,burger,left}) => {
  const style=StyleSheet.create({
    container:{
      alignItems:'center',
      flexDirection:'row',
      zIndex:1,
      backgroundColor:'#f00',
      height:79,
      position:'absolute',
    },
    text:{
      position:'absolute',
      left:left,
      fontSize:21,
      fontWeight:'bold'
    }
  })
  return (
    <View style={style.container}>
      {
        burger && <Burger style={{position:'absolute',left:22}}/>
      }
      <Text style={style.text}>{title}</Text>
    </View>
  )
}

export default Header
