import { AUTH_STACK_SCREEN, STACK_SCREENS } from "../constants/Navigation";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Login from "../screens/auth/Login";
import ResetPassword from "../screens/auth/ResetPassword";
import Signup from "../screens/auth/Signup";
import EditProfile from "../screens/frontend/EditProfile";
import Home from "../screens/frontend/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "../screens/frontend/Profile";
import CreatePost from "../screens/frontend/CreatePost";
import { Image } from "react-native";
import Images from "../constants/Images";

import {navStyles} from './NavigationStyle'

export const AUTH_STACK_NAVIGATION_SCREENS=[
{name:AUTH_STACK_SCREEN.LOGIN  , component:Login},
{name:AUTH_STACK_SCREEN.SIGNUP  , component:Signup},
{name:AUTH_STACK_SCREEN.FORGOT_PASSWORD  , component:ForgotPassword},
]
export const STACK_NAVIGATION_SCREENS=[
{name:STACK_SCREENS.BOTTOM_TAB  , component:MyTabs},
{name:STACK_SCREENS.PROFILE_EDIT  , component:EditProfile},
{name:STACK_SCREENS.RESET_PASSWORD  , component:ResetPassword},

]



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: { paddingTop:10 },
      tabBarIcon: ({ focused }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = Images.home
        } else if (route.name === 'CreatePost') {
          iconName = Images.plus
        }
        else{
          iconName = Images.profile
        }
        return <Image source={iconName}/>;
      },
    })}
    >
      <Tab.Screen name="Home" component={Home} 
       options={{ headerShadowVisible: false, title: '', headerTitle: ()=><Image source={Images.smallTextLogo}/> , headerTitleAlign: 'center', }}
      />
      <Tab.Screen name="CreatePost" component={CreatePost} 
      options={{ headerShadowVisible: false, title: ''  ,}}
      
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{ headerShadowVisible: false, title:"", headerTitle: 'jacob_w',  headerTitleAlign: 'center', headerTitleStyle: navStyles.titleStyle, }}
      />

    </Tab.Navigator>
  );
}
