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
