import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/navigations/Routes';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000);
  }, [])
  return (
    <NavigationContainer>
      <Routes />
      <Toast />
     </NavigationContainer>
  )
}