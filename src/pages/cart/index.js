import React from 'react'
import {View,Text} from 'react-native'
import {BottomTabs,Header,Gaps} from '../../components'

const Cart = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Header title='CART' burger={true} left={180}/>
      <Gaps/>
      <Text>Cart</Text>
      <BottomTabs
        home={()=>navigation.navigate('Home')}
        cart={()=>navigation.navigate('Cart')}
        profile={()=>navigation.navigate('Profile')}/>
    </View>
  )
}

export default Cart
