import React,{useState} from 'react'
import {ScrollView,View,StyleSheet,Text} from 'react-native'
import {LoginBG} from '../../assets'
import {LoginMol,Buttons,Footer,WeddingTitle} from '../../components'
import firebase from '../../config/firebase'
import {showMessage} from 'react-native-flash-message'

const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPass] = useState('')

  const submit=()=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res=>{
      navigation.replace('Discover')
      setEmail('')
      setPass('')
    })
  }

  return (
    <ScrollView>
      <View style={style.container}>
        <LoginBG style={{flex:1}}/>
        <WeddingTitle/>
        <LoginMol
          valEmail={email}
          valPass={password}
          changeEmail={valEmail=>setEmail(valEmail)}
          changePass={valPass=>setPass(valPass)}
          onPress={submit}
          />
        <Text style={style.or}>OR</Text>
        <Buttons position='absolute' top={500} width={362} title='Sign Up' bgColor='#FF8527' color='#fff' radius={8} height={54} onPress={()=>navigation.navigate('SignUp')}/>
        <Footer/>
      </View>
    </ScrollView>
  )
}

export default Login

const style = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
    flexDirection:'column',
  },
  or:{
    fontSize:19,
    position:'absolute',
    bottom:245,
    color:'#444'
  }
})
