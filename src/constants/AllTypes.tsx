import { NavigationProp } from '@react-navigation/native';



export type routeProps = {
  navigation: NavigationProp<any>;
};
export type ToastType = 'success' | 'error' | 'info';

export type handleChangeProps = {
  name:string,
  value:string,
  type:string,
};

export type UserData = {
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  role?: string;
  status?:string,
  uid?: string,
}
export type SigninUserData = {
  email: string,
  password: string,
 
}
export type ForgotData = {
  email: string,
  
}

// ----------------- context types

export interface AuthContextProps {
  isAuth: boolean;
  user: Record<string, any>;
  dispatch: React.Dispatch<{ type: string; payload: { userData?: Record<string, any> } }>;
}



export interface FirebaseUser {
  uid: string;
  displayName?: string | null;
  email?: string | null;
  // Add any additional properties you need
}
export interface UserProfileData {
  confirmPassword?: string ;
  email?: string;
  password?: string ;
  role?: string ;
  status?: string ;
  uid?: string;
  username?: string ;
  
}

export interface AuthState {
  isAuth: boolean;
  user: UserProfileData;
}

export type AuthAction =
  | { type: "Login"; payload: { userData?: UserProfileData } }
  | { type: "Logout" };