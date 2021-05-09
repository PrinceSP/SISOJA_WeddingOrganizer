import React from 'react'
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'

const Buttons = ({title,color,bgColor,radius,onPress}) => {
  const style = StyleSheet.create({
    container:{
      backgroundColor:bgColor,
      borderRadius:radius,
      height:70,
      width:204,
      position:'absolute',
      top:550,
      alignItems:'center',
      justifyContent:'center'
    },
    t:{
      color:color,
      fontFamily:"Cairo-SemiBold",
      fontSize:20
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
