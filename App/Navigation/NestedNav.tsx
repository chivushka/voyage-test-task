import React, { FC, useCallback, useEffect, useState } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { monoColor, primaryColor } from '../Assets/Styles/styles';

import Login from '../Components/Screens/Login/LoginScreen/Login';
import ChooseProj from '../Components/Screens/Login/ChooseProject/ChooseProj';
import ForgotPass from '../Components/Screens/Login/ForgotPass/ForgotPass';
import MailSent from '../Components/Screens/Login/ForgotPass/MailSent';
import ResetPassword from '../Components/Screens/Login/ResetPass/ResetPassword';
import ResetCompleted from '../Components/Screens/Login/ResetPass/ResetCompleted';
import { useAppDispatch, useAppSelector } from '../Store/hooks';

import {
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {
  changeAccessToken,
  changeIsLoading,
  changeIsLogged,
  changeRefreshToken,
} from '../Store/Slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getPreferencesData, getProjectList, getProjectSettings, getUsersData } from '../Network/ApiActions/UserActions/userActions';
import { addUserData } from '../Store/Slices/userInfoSlice';
import { useTranslation } from 'react-i18next';


import { OrganizationAdmin } from '../Library/Utils/Types/ApiTypes/userModels';


import { projectSettingsActions } from '../Store/Slices/projectSettingsSlice';
import { addProjectsData } from '../Store/Slices/projectsInfoSlice';

const UnloggedTab = createBottomTabNavigator();
const GeneralTab = createBottomTabNavigator();



export enum BottomTabScreens {
  loginScreenName = 'UnLogged',
  chooseProjectScreenName = 'Choose Project',
  forgotPassScreenName = 'Forgot Password',
  mailSentScreenName = 'Mail sent',
  resetPasswordScreenName = 'Reset Password',
  resetDoneScreenName = 'Reset Done',

  projectBookingsScreen = 'Project Bookings',
}

const LoggedTabNavigator = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation();
  const [userData, setUserData] = useState<OrganizationAdmin>(
    {} as OrganizationAdmin
  );


  const bootstrapProjectSettings = async () => {
    const { results } = await getProjectSettings();

    dispatch(projectSettingsActions.saveSettings(results))
  }

  useEffect(() => { bootstrapProjectSettings() }, [bootstrapProjectSettings])

  const getUserInfo = async () => {
    const res = await getUsersData();
    res && setUserData(res);
  };

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -100 : -30}
    >
      <></>
    </KeyboardAvoidingView>
  );
};

const UnloggedTabNavigator = () => {
  return (
    <UnloggedTab.Navigator
      initialRouteName={BottomTabScreens.loginScreenName}
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: monoColor,
        tabBarStyle: {
          display: 'none',
        },
      })}
    >
      <UnloggedTab.Screen
        name={BottomTabScreens.loginScreenName}
        component={Login}
      />
      <UnloggedTab.Screen
        name={BottomTabScreens.chooseProjectScreenName}
        component={ChooseProj}
        options={{
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <UnloggedTab.Screen
        name={BottomTabScreens.forgotPassScreenName}
        component={ForgotPass}
      />
      <UnloggedTab.Screen
        name={BottomTabScreens.mailSentScreenName}
        component={MailSent}
      />
      <UnloggedTab.Screen
        name={BottomTabScreens.resetPasswordScreenName}
        component={ResetPassword}
      />
      <UnloggedTab.Screen
        name={BottomTabScreens.resetDoneScreenName}
        component={ResetCompleted}
      />
    </UnloggedTab.Navigator>
  );
};

const Navigation: FC = () => {
  const loginState = useAppSelector((state) => state.loginState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    isLogged();
    SplashScreen.hide();
  }, []);

  const onBootstrap = useCallback(async () => {


    if (loginState.isLogged) {
      const data = await getPreferencesData();

      if (data) {
        dispatch(addUserData(data.user));
      }

      const timer = setInterval(async () => {

        dispatch(addProjectsData((await getProjectList() as any).results))
      }, 5000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [loginState.isLogged]);

  useEffect(() => {
    onBootstrap();
  }, [onBootstrap]);


  const isLogged = async (): Promise<void> => {
    try {
      dispatch(changeIsLoading(true));
      let userToken: string | null = await AsyncStorage.getItem('userToken');
      let refreshToken: string | null = await AsyncStorage.getItem(
        'refreshToken'
      );

      dispatch(changeIsLogged(!!userToken));
      dispatch(changeAccessToken(userToken));
      dispatch(changeRefreshToken(refreshToken));

      if (userToken) {
        const data = await getPreferencesData();
        if (data) {
          dispatch(addUserData(data.user));
        }
      }
      dispatch(changeIsLoading(false));
    } catch (e) {
      console.log('isLogged error', e);
    }
  };



  return (
    <NavigationContainer>
      <GeneralTab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: monoColor,
          tabBarStyle: {
            display: 'none',
          },
        })}
      >
        {loginState.isLogged === true ? (
          <GeneralTab.Screen
            name={'LoggedNav'}
            component={LoggedTabNavigator}
          />
        ) : (
          <GeneralTab.Screen
            name={'UnloggedNav'}
            component={UnloggedTabNavigator}
          />
        )}
        {/* THERE WILL BE THE REST OF SCREENS */}
      </GeneralTab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

