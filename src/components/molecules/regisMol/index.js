import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Buttons,Inputs} from '../../atoms'
import DatePicker from 'react-native-date-picker'
import {showMessage} from 'react-native-flash-message'
import firebase from '../../../config/firebase'

const RegisMol = () => {
  const [date,setDate] = useState(new Date())
  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [job,setJob] = useState('')

  const style = StyleSheet.create({
    container:{
      position:'absolute',
      top:200
    },
    text:{
      fontSize:22,
      color:'#fff',
      fontWeight:'bold'
    }
  })

  const submit=()=>{

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res=>{
      const UserID = res.user.uid
      const datas = {
        fullname,email,password,job,date
      }
      firebase.database().ref(`users/${UserID}`).set(datas)
      setFullname('')
      setEmail('')
      setPassword('')
      setJob('')
      setDate(new Date())
    })
    .catch(err=>{
      showMessage({
        message:err.message,
        type:'default',
        backgroundColor:'#d9435e',
        color:"#fff"
      })
    })
  }
  return (
    <View style={style.container}>
      <Text style={style.text}>Fullname</Text>
      <Inputs holder='Fullname' value={fullname} onChangeText={value=>setFullname(value)}/>
      <Text style={style.text}>Email</Text>
      <Inputs holder='Email Address' value={email} onChangeText={value=>setEmail(value)}/>
      <Text style={style.text}>Password</Text>
      <Inputs holder='Password' value={password} secureTextEntry onChangeText={value=>setPassword(value)}/>
      <Text style={style.text}>Job</Text>
      <Inputs holder='Job' value={job} onChangeText={value=>setJob(value)}/>
      <Text style={style.text}>Date of Birth</Text>
      <DatePicker date={date} onDateChange={setDate} mode='date' textColor="#000" backgroundColor="#fff" marginBottom={20}/>
      <Buttons width={362} title='Sign Up' bgColor='#FF8527' color='#fff' radius={8} height={54} onPress={submit}/>
    </View>
  )
}

export default RegisMol
