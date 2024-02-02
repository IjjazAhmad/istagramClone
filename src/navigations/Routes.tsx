
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/frontend/Home';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';
import ForgotPassword from '../screens/auth/ForgotPassword';
const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShadowVisible: false, title: '' }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShadowVisible: false, title: '' }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShadowVisible: false, title: '' }}
      />
      
     
    </Stack.Navigator>
  )
}