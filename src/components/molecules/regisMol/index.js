import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {UploadIMG} from '../../../assets'
import {Buttons,Inputs} from '../../atoms'
import DatePicker from 'react-native-date-picker'
import FlashMessage,{showMessage} from 'react-native-flash-message'
import firebase from '../../../config/firebase'
import {launchImageLibrary} from 'react-native-image-picker'


const RegisMol = ({nav}) => {
  const [date,setDate] = useState(new Date())
  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [job,setJob] = useState('')
  const [photo,setPhoto] = useState('')
  const [hasPhoto, setHasPhoto] = useState(false)
  const [photoBase64,setPhotoBase64] = useState('')

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

  const getImage=()=>{
    launchImageLibrary({maxHeight:200,maxWidth:200,includeBase64:true},res=>{
      console.log(res);
      if(res.didCancel){
        setHasPhoto(false)
        showMessage({
          message:'Upload photo cancelled',
          type:'default',
          backgroundColor:'#d9435e',
          color:"#fff"
        })
      }else{
        setPhoto(res.uri);
        setPhotoBase64(res.base64);
        setHasPhoto(true);
      }

    })
  }

  const submit=()=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res=>{
      const UserID = res.user.uid
      const datas = {
        photo:photoBase64,fullname,email,password,job,date
      }

      if (res.user) {
        res.user.updateProfile({
          displayName: fullname,
          photoUrl:datas.photo
        })
      }

      firebase.database().ref(`users/${UserID}`).set(datas)
      setFullname('')
      setEmail('')
      setPassword('')
      setJob('')
      setDate(new Date())
      nav.navigate('Login')
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
      <TouchableOpacity style={{flex:.8,alignItems:'center',justifyContent:'center'}} onPress={getImage} activeOpacity = {0.7}>
          {
            hasPhoto &&
            <View style={{borderRadius:50,height:150,width:150,borderStyle:'dashed',borderWidth:2,borderColor:'#fff',alignItems:'center',justifyContent:'center'}}>
              <Image source={{uri:photo}} style={{height:120,width:120,borderRadius:40}}/>
            </View>
          }
          {
            !hasPhoto &&
            <View style={{borderRadius:50,height:150,width:150,borderStyle:'dashed',borderWidth:2,borderColor:'#fff',alignItems:'center',justifyContent:'center'}}>
              <View style={{borderRadius:40,backgroundColor:'#fff',height:120,width:120,alignItems:'center',justifyContent:'center'}}>
                <Text style={{width:60,height:50,textAlign:'center',fontSize:20}}>Add Photo</Text>
              </View>
            </View>
          }

        </TouchableOpacity>
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
      <Buttons fSize={20} width={362} title='Sign Up' bgColor='#FF8527' color='#fff' radius={8} height={54} onPress={submit}/>
      <FlashMessage position="top"/>
    </View>
  )
}

export default RegisMol
