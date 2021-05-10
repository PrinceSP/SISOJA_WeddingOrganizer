import React from 'react'
import {View} from 'react-native'
import {Buttons,Inputs} from '../../atoms'

const LoginMol = () => {
  return (
    <View style={{alignItems:'center',position:'absolute',top:200}}>
      <Inputs holder='Username/Email'/>
      <Inputs holder='Password'/>
      <Buttons width={362} title='Login' bgColor='#FF8527' color='#fff' radius={8} height={54}/>
    </View>
  )
}

export default LoginMol
