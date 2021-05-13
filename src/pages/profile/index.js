import React,{useEffect,useState} from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import {BottomTabs,Header,Gaps} from '../../components'
import firebase from '../../config/firebase'

const Profile = ({navigation}) => {
  const [currentUser,setCurrentUser] = useState()
  const [profile,setProfile] = useState({})

  const current = firebase.auth().currentUser

  useEffect(()=>{
    firebase.database().ref(`/users/${current.uid}`).on('value',res=>{
      const photo=`data:/image/jpeg;base64,${res.val().photo}`
      setProfile({
        ...res.val(),photo:photo
      })
    })
  },[])

  const style = StyleSheet.create({
    imgCont:{
      height: 140,
      width:140,
      marginBottom:30,
      borderRadius:70,
      borderStyle:'dotted',
      borderColor:'darkblue',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center'
    },
    textCont:{

    },
    text:{
      fontSize:20,
      fontFamily:'Cairo-SemiBold'
    }
  })

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Header title='PROFILE' burger={true} left={155}/>
      <Gaps/>
      {
        current &&
        <View style={{alignItems:'center',marginTop:40}}>
          <View style={style.imgCont}>
            <Image style={{height:120,width:120,borderRadius:60}} source={{uri:profile.photo}}/>
          </View>
          <View style={style.textCont}>
            <Text style={style.text}>Name: {profile.fullname}</Text>
            <Text style={style.text}>Email: {profile.email}</Text>
            <Text style={style.text}>Job: {profile.job}</Text>
          </View>
        </View>
      }
      <BottomTabs
        home={()=>navigation.navigate('Home')}
        cart={()=>navigation.navigate('Cart')}
        profile={()=>navigation.navigate('Profile')}
        />
    </View>
  )
}

export default Profile
