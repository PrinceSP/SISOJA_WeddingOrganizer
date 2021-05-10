import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Burger} from '../../../assets'

const Header = () => {
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
      left:140,
      fontSize:21,
      fontWeight:'bold'
    }
  })
  return (
    <View style={style.container}>
      <Burger style={{position:'absolute',left:22}}/>
      <Text style={style.text}>SISOJA WO</Text>
    </View>
  )
}

export default Header
