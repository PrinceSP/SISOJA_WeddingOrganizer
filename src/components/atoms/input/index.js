import React from 'react'
import {TextInput,View,StyleSheet} from 'react-native'

const Inputs = ({holder,value,onChangeText,secureTextEntry}) => {
  const style = StyleSheet.create({
    container:{
      backgroundColor:'#fff',
      borderRadius:8,
      fontSize:16,
      height:61,
      width:362,
      paddingHorizontal:16,
      marginBottom:20
    }
  })
  return (
    <TextInput style={style.container} placeholder={holder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry}/>
  )
}

export default Inputs
