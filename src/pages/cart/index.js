import React from 'react'
import {View,Text} from 'react-native'
import {BottomTabs,Header} from '../../components'

const Cart = ({navigation}) => {
  return (
    <View>
      <Header title='Cart' burger={true} left={140}/>
      <Text>Cart</Text>
      <BottomTabs
        home={()=>navigation.navigate('Home')}
        cart={()=>navigation.navigate('Cart')}
        profile={()=>navigation.navigate('Profile')}/>
    </View>
  )
}

export default Cart
