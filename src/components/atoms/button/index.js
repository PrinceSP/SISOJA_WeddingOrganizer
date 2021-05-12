import React from 'react'
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'

const Buttons = ({fSize,width,title,color,bgColor,radius,onPress,height,position,top}) => {
  const style = StyleSheet.create({
    container:{
      backgroundColor:bgColor,
      borderRadius:radius,
      height:height,
      width:width,
      position:position,
      top:top,
      alignItems:'center',
      justifyContent:'center'
    },
    t:{
      color:color,
      fontFamily:"Cairo-SemiBold",
      fontSize:fSize
    }
  })
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <View>
        <Text style={style.t}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Buttons
