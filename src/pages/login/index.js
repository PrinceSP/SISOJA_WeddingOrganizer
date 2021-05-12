import React,{useState} from 'react'
import {ScrollView,View,StyleSheet,Text} from 'react-native'
import {LoginBG} from '../../assets'
import {LoginMol,Buttons,Footer,WeddingTitle} from '../../components'
import firebase from '../../config/firebase'
import FlashMessage,{showMessage} from 'react-native-flash-message'

const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPass] = useState('')
  const image = {uri:`${LoginBG}`}

  const submit=()=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res=>{
      navigation.replace('Home')
      setEmail('')
      setPass('')
    })
    .catch(err=>{
      console.log(err);
      showMessage({
        message:err.message,
        type:'default',
        backgroundColor:'#d9435e',
        color:'#fff'
      })
    })
  }

  return (
    <ScrollView>
      <View style={style.container}>
        <LoginBG/>
        <WeddingTitle/>
        <LoginMol
          valEmail={email}
          valPass={password}
          changeEmail={valEmail=>setEmail(valEmail)}
          changePass={valPass=>setPass(valPass)}
          onPress={submit}
          />
        <Text style={style.or}>OR</Text>
        <Buttons fSize={20} position='absolute' top={500} width={362} title='Sign Up' bgColor='#FF8527' color='#fff' radius={8} height={54} onPress={()=>navigation.navigate('SignUp')}/>
        <Footer/>
        <FlashMessage position="top"/>
      </View>
    </ScrollView>
  )
}

export default Login

const style = StyleSheet.create({
  container:{
    alignItems:'center',
    flexDirection:'column',
  },
  or:{
    fontSize:19,
    position:'absolute',
    top:445,
    color:'#444'
  }
})
