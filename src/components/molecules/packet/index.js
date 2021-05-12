import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Packet1,Packet2,Packet3} from '../../../assets'
import {Buttons} from '../../../components'
const Packets = ({title,price,one,two,three,four,five,choose}) => {
  const images = [Packet1,Packet2,Packet3]
  let image;
  if (choose===1) {
    image = <Packet1 height={354}/>
  } else if (choose===2){
    image = <Packet2 height={354}/>
  } else{
    image = <Packet3 height={354}/>
  }

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
      {image}
      <View style={style.rightCont}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.title2}>{`Rp.${price}`}</Text>
        <Text style={style.title2}>Wedding & Pre-Wedding</Text>
        <View style={{marginTop:20}}>
          <Text>{one}</Text>
          <Text>{two}</Text>
          <Text>{three}</Text>
          <Text>{four}</Text>
          <Text>{five}</Text>
        </View>
        <Buttons title='mofe info' fSize={18} height={50} width={100} bgColor="#77acf1" position='absolute' top={280} radius={30} color='#fff'/>
      </View>
    </View>
  )
}

export default Packets
