import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Packet1} from '../../../assets'
const Packets = ({title,price}) => {
  const style = StyleSheet.create({
    titles:{
      fontFamily:'Sofia-Regular',
      fontSize:27,
      textAlign:'center'
    },
    prices:{fontFamily:'Sofia-Regular',fontSize:14},
    container:{
      width:325,
      height:354,
      justifyContent:'space-between',
      flexDirection:'row',
      marginTop:20,
      backgroundColor:'rgba(196,196,196,0.5)'
    },
    rightCont:{flex:1,marginLeft:10},
    title:{
      fontFamily:'Sofia-Regular',
      fontSize:27,
      color:'#AB0101',
      textTransform:'capitalize',
      textShadowColor: '#ff2131',
      textShadowOffset: {width: -1, height: 2},
      textShadowRadius: 7,
    },
    title2:{
      fontFamily:'Sofia-Regular',
      fontSize:14,
    }
  })
  return (
    <View style={style.container}>
      <Packet1/>
      <View style={style.rightCont}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.title2}>{`Rp.${price}`}</Text>
        <Text style={style.title2}>Wedding & Pre-Wedding</Text>
      </View>
    </View>
  )
}

export default Packets
