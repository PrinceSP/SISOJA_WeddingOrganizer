import React,{useEffect} from 'react'
import {GetStartedBG} from '../../assets'

const Splash = ({navigation})=>{
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('GetStarted');
    },2000)
  },[])

  return(
    <GetStartedBG/>
  )
}

export default Splash
