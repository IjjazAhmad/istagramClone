import React from 'react'
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native'
import { ForgotData, SigninUserData, UserData, routeProps } from '../../constants/AllTypes';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';
import { styles } from '../../constants/GlobalStyle';
import Images from '../../constants/Images';
import { authstyles } from './AuthStyle';
import auth from '@react-native-firebase/auth';
import { notify } from '../../constants/GlobalStyle';
const initialState = { email: ""}


export default function ForgotPassword({ navigation }: routeProps) {
  const [loading, setisloading] = useState(false)
  const [state, setState] = useState(initialState)

  const handleChange = (name: string, value: string): void => {
    setState((s) => ({ ...s, [name]: value }));
  };
  const handleSubmite = () => {


    const { email } = state
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email) {
      return notify("plz Enter Email", " formate like: abc@gmail.com", "error");
    }
    if (!validRegex.test(email)) {
      return notify("Invalid Email Format", " formate like: abc@gmail.com", "error");
    }

    
    let userData = { email }
    setisloading(true)
    createUser(userData)
    setState(initialState)
    
  }
  const createUser = async(userData: ForgotData) => {

    try {
     
      await auth().sendPasswordResetEmail(userData.email);
     
      notify("Password Reset Email Sent", `A password reset email has been sent to ${userData.email}. Please check your inbox.`, "error");
      setisloading(false)
    } catch (error) {
      notify("Forgot Password Error:", "Try again", "error");
      setisloading(false)
    }
  }

  return (

    <View style={[styles.flexContainer]}>
      <ScrollView >
        <View style={[styles.horizantalyCenter]}>
          <View style={[authstyles.textLogo, styles.horizantalyCenter ,{marginTop:100}]}>
            <Image source={Images.textLogo} />
            <Text style={{textAlign:"center", marginTop:15}}>Forgot your password? write your email and we will send you a magic link to reset your passwod</Text>
          </View>
          <TextInput
            style={[authstyles.formControl,{marginTop:60, marginBottom:20}]}
            placeholder='Enter your email'
            placeholderTextColor={"#D1D3D4"}
            keyboardType='email-address'
            value={state.email}
            onChangeText={(value: string) => handleChange("email", value)}
          />
          <View style={{ width: "90%" }}>
            {loading ?
              <Button title='loading...'
                disabled={true}
              />
              :
              <Button
                title='Send Magic Link'

                onPress={handleSubmite}
              />
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
