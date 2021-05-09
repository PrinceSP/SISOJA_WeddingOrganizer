import React from 'react'
import {TextInput,View,StyleSheet} from 'react-native'

const Inputs = ({holder}) => {
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
    <TextInput style={style.container} placeholder={holder}/>
  )
}

export default Inputs
