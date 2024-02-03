import React from 'react'
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native'
import {  UserData, routeProps } from '../../constants/AllTypes';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';
import { styles } from '../../constants/GlobalStyle';
import Images from '../../constants/Images';
import { authstyles } from './AuthStyle';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {notify} from '../../constants/GlobalStyle';
import { FIRE_BASE_COLLECTION } from '../../constants/Collections';
import { AUTH_STACK_SCREEN } from '../../constants/Navigation';
import { useAuthContext } from '../../Context/AuthContext';
const initialState = {username:"", email: "", password: "" , confirmPassword:""}


export default function Signup({ navigation }: routeProps) {
  const { dispatch } = useAuthContext()
  const [loading, setisloading] = useState(false)
  const [state, setState] = useState(initialState)

  const handleChange = (name: string, value: string): void => {
    setState((s) => ({ ...s, [name]: value }));
};
  const handleSubmite = () => {


    const {username, email, password ,confirmPassword} = state
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username.length < 3) {
      return notify("plz Enter Username", "username length minimum 3 character ", "error");
    }
    if ( !email) {
      return notify("plz Enter Email"," formate like: abc@gmail.com", "error");
    }
    if (!validRegex.test(email)) {
      return notify("Invalid Email Format"," formate like: abc@gmail.com", "error");
    }

    if (password.length < 6) {
      return notify("Invalid Password","Password length minimum 6 character", "error");
    }
    if (confirmPassword != password) {
      return notify("Enter Confirm Password", "Password Not match", "error");
    }
    let userData:UserData = {username, email, password,confirmPassword }
    userData.role = "user"
    userData.status = "active"
    setisloading(true)
    createUser(userData)
    setState(initialState)
    setisloading(false)
  }
 
  const createUser = (userData: UserData): void => {

    auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((userCredential) => {
        // User account created & signed in!
        const user = userCredential.user;

        // Generate a UID for the user
        userData.uid = user.uid;

        // Set user data in Firestore using the generated UID
        firestore()
          .collection(FIRE_BASE_COLLECTION.USERS)
          .doc(userData.uid)
          .set(userData)
          .then(() => {
            dispatch({ type: "Login", payload: { userData } })
            notify("Success", "User SignUp Successfully", "success")
            setisloading(false)
          })
          .catch((error) => {
            console.error('Error adding user data to Firestore: ', error);
          });
      })

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setisloading(false)
          return notify("Email Error", "That email address is already register!", "error");
        }

        if (error.code === 'auth/invalid-email') {
          setisloading(false)
          return notify("Email|Password Error", "plz try again", "error");
        }
        setisloading(false)
        return notify("Email|Password Error", "plz try again", "error");
      });
  };

  return (

    <View style={[styles.flexContainer]}>
      <ScrollView >
        <View style={[authstyles.textLogo, styles.horizantalyCenter]}>
          <Image source={Images.textLogo}/>
        </View>
        <View style={[styles.horizantalyCenter]}>
          <TextInput
            style={authstyles.formControl}
            placeholder='Username'
            placeholderTextColor={"#D1D3D4"}
            
            value={state.username}
            onChangeText={(value: string) => handleChange("username", value)}
          />
          <TextInput
            style={authstyles.formControl}
            placeholder='Email'
            placeholderTextColor={"#D1D3D4"}
            keyboardType='email-address'
            value={state.email}
            onChangeText={(value: string) => handleChange("email", value)}
          />
          <TextInput
            style={authstyles.formControl}
            placeholder='Password'
            placeholderTextColor={"#D1D3D4"}
            value={state.password}
            secureTextEntry
            onChangeText={(value: string) => handleChange("password", value)}
          />
          <TextInput
            style={authstyles.formControl}
            placeholder='Confirm Password'
            placeholderTextColor={"#D1D3D4"}
            value={state.confirmPassword}
            secureTextEntry
            onChangeText={(value: string) => handleChange("confirmPassword", value)}
          />
        </View>
        <View style={[styles.flexEnd]}>
          <Text style={authstyles.forget} onPress={() => { navigation.navigate(AUTH_STACK_SCREEN.FORGOT_PASSWORD) }}>Forgot password?</Text>
        </View>
        <View style={[styles.horizantalyCenter]}>
          <View style={{ width: "90%" }}>
            {loading ?
              <Button title='loading...'
                disabled={true}
              />
              :
              <Button
                title='Sign Up'
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
            <Text style={[authstyles.text]}>Don't have an account.<Text style={authstyles.forget} onPress={() => { navigation.navigate(AUTH_STACK_SCREEN.LOGIN) }} >Login.</Text></Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
