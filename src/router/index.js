import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Splash,GetStarted,Login,SignUp,Home} from '../pages'

const Stack = createStackNavigator();

const Router = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default Router
