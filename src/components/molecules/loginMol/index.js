import React from 'react'
import {View} from 'react-native'
import {Buttons,Inputs} from '../../atoms'

const LoginMol = ({valEmail,valPass,changeEmail,changePass,onPress}) => {
  return (
    <View style={{alignItems:'center',position:'absolute',top:200}}>
      <Inputs holder='Username/Email' value={valEmail} onChangeText={changeEmail}/>
      <Inputs holder='Password' value={valPass} onChangeText={changePass}/>
      <Buttons width={362} title='Login' bgColor='#FF8527' color='#fff' radius={8} height={54} onPress={onPress}/>
    </View>
  )
}

export default LoginMol
