import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../../Store/hooks';
import {
  changeAccessToken,
  changeIsLoading,
  changeIsLogged,
  changeRefreshToken,
  handleIsSSOLogin,
} from '../../Store/Slices/authSlice';
import { addUserData } from '../../Store/Slices/userInfoSlice';
import { doUserLogin, loginAuth0ApiUser } from '../../Network/ApiActions/AuthActions/authActions';
import { getPreferencesData } from '../../Network/ApiActions/UserActions/userActions';
import { BottomTabScreens } from '../../Navigation/NestedNav';
import { navigate } from '../../Navigation/NavigationService';
import { auth0 } from '../Utils/SSOLogin';
import Config from 'react-native-config';
import { Platform } from 'react-native';
import { fetchProjects } from '../Utils/projectUtils';

interface LoginCredentials {
  email?: string;
  password?: string;
}

interface UseAuthReturn {
  login: (credentials: LoginCredentials, navigation: any, saveCredentials?: (email: string, password: string) => Promise<void>) => Promise<void>;
  handleSSOLogin: (navigation: any) => Promise<void>;
  handleLogin: (accessToken: string | null, refreshToken: string | null, navigation: any) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export const useAuth = (): UseAuthReturn => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = useCallback(async (
    accessToken: string | null, 
    refreshToken: string | null, 
    navigation: any
  ) => {
    try {
      dispatch(changeAccessToken(accessToken));
      if (refreshToken) {
        dispatch(changeRefreshToken(refreshToken));
      }
      
      await AsyncStorage.setItem('userToken', `${accessToken}`);
      await AsyncStorage.setItem('refreshToken', `${refreshToken}`);
      
      const loginTimestamp = new Date().getTime();
      await AsyncStorage.setItem('loginTimestamp', loginTimestamp.toString());
      
      const data = await getPreferencesData();
      if (data) {
        dispatch(addUserData(data.user));
      }
      
      try {
        console.log('Fetching projects after login...');
        const projectResult = await fetchProjects(dispatch);
        if (projectResult.success) {
          console.log('Projects loaded successfully during login');
        } else {
          console.warn('Failed to fetch projects during login:', projectResult.error);
        }
      } catch (error) {
        console.error('Error fetching projects during login:', error);
      }
      
      navigation.navigate(BottomTabScreens.chooseProjectScreenName);
    } catch (error: any) {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('selectedDate');
      await auth0.webAuth.clearSession({ federated: true });
      
      dispatch(handleIsSSOLogin(false));
      dispatch(changeIsLoading(true));
      dispatch(changeAccessToken(null));
      dispatch(changeIsLogged(false));
      navigation.navigate(BottomTabScreens.loginScreenName);
      dispatch(changeIsLoading(false));
      
      console.log('Auth failed:', error);
      throw error;
    }
  }, [dispatch]);

  const login = useCallback(async (
    credentials: LoginCredentials,
    navigation: any,
    saveCredentials?: (email: string, password: string) => Promise<void>
  ) => {
    if (!credentials.email || !credentials.password) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }

    setIsLoading(true);
    dispatch(changeIsLoading(true));
    
    try {
      const res = await doUserLogin({
        email: credentials.email,
        password: credentials.password
      });
      
      await handleLogin(res.data.access, res.data.refresh, navigation);
      
      if (saveCredentials && credentials.email && credentials.password) {
        try {
          await saveCredentials(credentials.email, credentials.password);
        } catch (error) {
          console.error('Failed to save credentials:', error);
        }
      }
      
    } catch (error: any) {
      console.log('Login error:', error);
      
      if (error.response) {
        switch (error.response.status) {
          case 400:
            Alert.alert('Bad request, try again');
            break;
          case 401:
            Alert.alert('Invalid credentials, please try again');
            break;
          default:
            Alert.alert(error.response._response || 'Login failed');
            break;
        }
      } else {
        throw error;
      }
      
      throw error;
    } finally {
      setIsLoading(false);
      dispatch(changeIsLoading(false));
    }
  }, [dispatch, handleLogin]);

  const handleSSOLogin = useCallback(async (navigation: any) => {
    try {
      dispatch(changeIsLoading(true));
      
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        redirectUrl: Platform.OS === 'ios' 
          ? Config.REACT_APP_SSO_REDIRECT_CALLBACK_IOS 
          : Config.REACT_APP_SSO_REDIRECT_CALLBACK_ANDROID
      });

      const tokens = await loginAuth0ApiUser(credentials.accessToken, credentials.idToken);
      
      await handleLogin(tokens.access, tokens.refresh, navigation);
      dispatch(handleIsSSOLogin(true));
      
    } catch (error) {
      console.error('SSO Login failed', error);
      throw error;
    } finally {
      dispatch(changeIsLoading(false));
    }
  }, [dispatch, handleLogin]);

  const logout = useCallback(() => {
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('refreshToken');
    AsyncStorage.removeItem('selectedRef');
    dispatch(changeIsLoading(true));
    dispatch(changeAccessToken(null));
    dispatch(changeRefreshToken(null));
    dispatch(changeIsLogged(false));
    navigate(BottomTabScreens.loginScreenName);
    dispatch(changeIsLoading(false));
  }, [dispatch]);

  return {
    login,
    handleSSOLogin,
    handleLogin,
    logout,
    isLoading,
  };
}; 