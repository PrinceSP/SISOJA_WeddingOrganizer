import React from 'react'
import {View,Text,StyleSheet,ScrollView,Dimensions} from 'react-native'
import {RegBG} from '../../assets'
import {RegisMol,WeddingTitle} from '../../components'

const SignUp = ({navigation}) => {
  const style = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      flexDirection:'column',

    },
    greyCon:{
      backgroundColor:'#535353'
    }
  })
  return (
    <ScrollView showVerticalScrollIndicator={false}>
      <View style={style.container}>
        <RegBG height={1100}/>
        <WeddingTitle/>
        <View style={style.greyCon}/>
        <RegisMol nav={navigation}/>
      </View>
    </ScrollView>
  )
}

export default SignUp
