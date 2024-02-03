import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Navigation from './src/navigations/Navigation';
import AuthContextProvider from './src/Context/AuthContext';
export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000);
  }, [])
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
      <Toast />
    </NavigationContainer>
  )
}