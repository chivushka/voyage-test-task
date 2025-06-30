import {NavigatorScreenParams} from '@react-navigation/native';

export type BottomTabParamList = {
  Home: undefined;
  BookingList: undefined;
  Settings: undefined;
};

export type TypeRootStackParamList = {
  MainNav: NavigatorScreenParams<BottomTabParamList>;
  Login: undefined;
};
