import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Buttons,Inputs} from '../../atoms'
import DatePicker from 'react-native-date-picker'

const RegisMol = () => {
  const [date,setDate] = useState(new Date())

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
  return (
    <View style={style.container}>
      <Text style={style.text}>Fullname</Text>
      <Inputs holder='Fullname'/>
      <Text style={style.text}>Email</Text>
      <Inputs holder='Email Address'/>
      <Text style={style.text}>Password</Text>
      <Inputs holder='Password'/>
      <Text style={style.text}>Job</Text>
      <Inputs holder='Job'/>
      <Text style={style.text}>Date of Birth</Text>
      <DatePicker date={date} onDateChange={setDate} mode='date' textColor="#000" backgroundColor="#fff" marginBottom={20}/>
      <Buttons width={362} title='Sign Up' bgColor='#FF8527' color='#fff' radius={8} height={54}/>
    </View>
  )
}

export default RegisMol
