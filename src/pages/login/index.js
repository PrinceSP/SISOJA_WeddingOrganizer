import React from 'react'
import {ScrollView,View,StyleSheet,Text} from 'react-native'
import {LoginBG} from '../../assets'
import {LoginMol,Buttons,Footer,WeddingTitle} from '../../components'

const Login = ({navigation}) => {
  return (
    <View style={style.container}>
      <LoginBG/>
      <WeddingTitle/>
      <LoginMol/>
      <Text style={{fontSize:19,position:'absolute',bottom:245,color:'#444'}}>OR</Text>
      <Buttons position='absolute' top={500} width={362} title='Sign Up' bgColor='#FF8527' color='#fff' radius={8} height={54} onPress={()=>navigation.navigate('SignUp')}/>
      <Footer/>
    </View>
  )
}

export default Login

const style = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
    flexDirection:'column',
  }
})
