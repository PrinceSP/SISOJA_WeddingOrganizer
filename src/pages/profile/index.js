import React from 'react'
import {View,Text} from 'react-native'
import {BottomTabs,Header,Gaps} from '../../components'

const Profile = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Header title='PROFILE' burger={false} left={155}/>
      <Gaps/>
      <Text>profile</Text>
      <BottomTabs
        home={()=>navigation.navigate('Home')}
        cart={()=>navigation.navigate('Cart')}
        profile={()=>navigation.navigate('Profile')}/>
    </View>
  )
}

export default Profile
