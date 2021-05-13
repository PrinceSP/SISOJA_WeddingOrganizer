import React,{useEffect,useState,useRef} from 'react'
import {View,Text,Image,StyleSheet,Modal} from 'react-native'
import {BottomTabs,Header,Gaps,Buttons} from '../../components'
import firebase from '../../config/firebase'
import FlashMessage,{showMessage} from 'react-native-flash-message'

const Cart = ({navigation}) => {
  const [currentUser,setCurrentUser] = useState()
  const [profile,setProfile] = useState({})
  const [modalOpen,setModalOpen] = useState(false)

  const current = firebase.auth().currentUser

  useEffect(()=>{
    firebase.database().ref(`/users/${current.uid}`).on('value',res=>{
      setProfile({
        ...res.val()
      })
    })
  },[])

  const family = 'Sofia-Regular'

  const style=StyleSheet.create({
    items:{
      height:200,
      width:250,
      backgroundColor:'#dcdcdc',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:200
    },
    title:{
      fontSize:28,
      fontFamily:family,
      color:'#AB0101',
      textTransform:'capitalize'
    },
    text:{
      fontSize:19,
      fontFamily:family
    },
    modalCont:{
      height:400,
      width:400,
      backgroundColor:'lightblue',
      borderRadius:40,
      flex:1
    }
  })

  const submit=()=>{
    console.log(true);
    firebase.database().ref(`/users/${current.uid}`).update({title:'',price:'',text:''})
    showMessage({
      message:'Order Successful',
      type:'default',
      backgroundColor:'lightgreen',
      color:'#000'
    })
  }

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Header title='CART' burger={true} left={180}/>
      <Gaps/>
      {
        profile.title != '' && profile.price != '' && profile.text != '' &&
        <View style={{alignItems:'center',marginTop:40}}>
          <View style={style.items}>
            <Text style={style.title}>{profile.title}</Text>
            <Text style={style.text}>Rp.{profile.price}</Text>
            <Text style={style.text}>{profile.text}</Text>
          </View>
          <Buttons title='ORDER' fSize={18} height={50} width={120} bgColor="#77acf1"  radius={30} color='#fff' onPress={submit}/>
        </View>
      }
      {
        profile.title == '' && profile.price == '' && profile.text == '' &&
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Text style={{fontSize:20}}>List is empty</Text>
        </View>
      }
      <FlashMessage position="top"/>
      <BottomTabs
        home={()=>navigation.navigate('Home')}
        cart={()=>navigation.navigate('Cart')}
        profile={()=>navigation.navigate('Profile')}/>
    </View>
  )
}

export default Cart
