import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, Button, Image, ScrollView } from 'react-native'
import { handleChangeProps, routeProps } from '../../constants/AllTypes';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';
import { styles } from '../../constants/GlobalStyle';
import Images from '../../constants/Images';
import { authstyles } from './AuthStyle';
// import auth from '@react-native-firebase/auth';
import {notify} from '../../constants/GlobalStyle';
const initialState = { email: "", password: "" }


export default function Signin({ navigation }: routeProps) {
  const [loading, setisloading] = useState(false)
  const [state, setState] = useState(initialState)

  const handleChange = (name: string, value: string): void => {
    setState((s) => ({ ...s, [name]: value }));
};
  const handleSubmite = () => {


    const { email, password } = state
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ( !email) {
      return notify("plz Enter Email"," formate like: abc@gmail.com", "error");
    }
    if (!validRegex.test(email)) {
      return notify("Invalid Email Format"," formate like: abc@gmail.com", "error");
    }

    if (password.length < 6) {
      return notify("Invalid Password","Password length minimum 6 character", "error");
    }
    let userData = { email, password }
    setisloading(true)
    // createUser(userData)
    setState(initialState)
  }
  // const createUser = (userData) => {

  //   auth().signInWithEmailAndPassword(userData.email, userData.password)
  //     .then(() => {
  //      notify("User Signin Successfully!","wellcome to bookservice app", "success");
  //      setisloading(false)
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         setisloading(false)
  //         return notify("Email Error","That email address is already register!", "error");
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         setisloading(false)
  //         return notify("Email|Password Error","plz try again", "error");
  //       }
  //       setisloading(false)
  //       return notify("Email|Password Error","plz try again", "error");
  //     });

  // }

  return (

    <View style={[styles.flexContainer]}>
      <ScrollView >
        <View style={[styles.horizantalyCenter]}>
          <Image source={Images.textLogo} style={authstyles.textLogo} />
        </View>
        <View style={[styles.horizantalyCenter]}>
          <TextInput
            style={authstyles.formControl}
            placeholder='Enter your email'
            placeholderTextColor={"#D1D3D4"}
            keyboardType='email-address'
            value={state.email}
            onChangeText={(value: string) => handleChange("email", value)}
          />
          <TextInput
            style={authstyles.formControl}
            placeholder='Enter your password'
            placeholderTextColor={"#D1D3D4"}
            value={state.password}
            secureTextEntry
          // onChangeText={value => handleChange("password", value)}
          />
        </View>
        <View style={[styles.flexEnd]}>
          <Text style={authstyles.forget}>Forgot password?</Text>
        </View>
        <View style={[styles.horizantalyCenter]}>
          <View style={{ width: "90%" }}>
            {loading ?
              <Button title='loading...'
                disabled={true}
              />
              :
              <Button
                title='Log In'

              onPress={handleSubmite}
              />

            }
          </View>
        </View>
        <View style={[styles.horizantalyCenter]}>
          <View style={{display:"flex", flexDirection:"row", marginVertical: 30 }}>
            <Image source={Images.google} style={{marginHorizontal:10, width:16.67, height:16.67}}/>
            <Text style={authstyles.textBold}>Login with Google</Text>
          </View>
          <View style={ { display: "flex", flexDirection: "row", marginVertical: 5 }}>
            <View style={[authstyles.line]}></View>
              <Text style={[authstyles.text]}>OR</Text>
            <View style={[authstyles.line]}></View>
          </View>
          <View style={{ marginVertical: 30 }}>
            <Text style={[authstyles.text]}>Don't have an account.<Text style={authstyles.forget} onPress={() => { navigation.navigate("Signup") }} >Sign up.</Text></Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
