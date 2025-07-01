import axios, { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import { navigate } from '../Navigation/NavigationService';
import { BottomTabScreens } from '../Navigation/NestedNav';
import { ApiUrl } from './Utils/ApiUrl';

const timeout: number = 300000;

export const _api = axios.create({
  timeout,
  headers: { 'Content-Type': 'application/json', Accept: '*/*' },
  withCredentials: false,
  responseType: 'json',
});

_api.interceptors.request.use(async config => {
  config.baseURL = Config.REACT_APP_BASEURL;

  try {
    const token = await getToken();
    if (token) {
      config.headers!.Authorization = `JWT ${token}`;
    }
  } catch (err) {
    console.error('Error getting token:', err);
  }
  return config;
});

_api.interceptors.response.use(
  response => response,
  async error => {
    if (Boolean(error.response) && error.response.status === 401) {
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          const refreshResponse = await axios.post(ApiUrl.authModule.refreshToken, {
            refresh: refreshToken
          }, {
            headers: { 'Content-Type': 'application/json' }
          });

          if (refreshResponse.data && refreshResponse.data.access) {
            await setAsyncStorage('userToken', refreshResponse.data.access);
            if (refreshResponse.data.refresh) {
              await setAsyncStorage('refreshToken', refreshResponse.data.refresh);
            }

            error.config.headers.Authorization = `JWT ${refreshResponse.data.access}`;
            return _api.request(error.config);
          } else {
            console.error('Invalid refresh response');
            await AsyncStorage.multiRemove(['userToken', 'refreshToken']);
            navigate(BottomTabScreens.logoutScreenName);
            return Promise.reject(new Error('Invalid refresh response'));
          }
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
          await AsyncStorage.multiRemove(['userToken', 'refreshToken']);
          navigate(BottomTabScreens.logoutScreenName);
          return Promise.reject(refreshError);
        }
      } else {
        await AsyncStorage.multiRemove(['userToken', 'refreshToken']);
        navigate(BottomTabScreens.logoutScreenName);
        return Promise.reject(new Error('No refresh token available'));
      }
    }

    return Promise.reject(error);
  }
);

export const _apiAuth0 = axios.create({
  timeout,
  headers: { 'Content-Type': 'application/json', Accept: '*/*' },
  withCredentials: false,
  responseType: 'json',
});

_apiAuth0.interceptors.request.use(config => {
  config.baseURL = Config.REACT_APP_LOGIN_URL;
  return config;
});

export const setAsyncStorage = (tokenName: string, tokenValue: any) => {
  AsyncStorage.setItem(tokenName, tokenValue);
};

const getToken = async () => {
  const token = await AsyncStorage.getItem('userToken');
  return token;
};

export const get = async <T = any>(url: string) => {
  const response: AxiosResponse<T> = await _api.get(url);
  return response;
};

export const post = async <T = any>(url: string, data: any, useToken?: string) => {
  const response: AxiosResponse<T> = await _api.post(url, data);
  return response;
};

export const postAuth0 = async <T = any>(url: string, data: any) => {
  const response: AxiosResponse<T> = await _apiAuth0.post(url, data);
  return response;
};

export const postWithoutHeaders = async <T = any>(
  url: string,
  data: any,
  useToken?: string,
) => {
  const response: AxiosResponse<T> = await _api.post(url, data);
  return response;
};

export const postData = async <T>(
  url: string,
  data: any,
  useToken?: string,
) => {
  const response: AxiosResponse<T> = await _api.post(url, data);
  return response;
};

export const patch = async <T = any>(url: string, data: any, useToken?: string) => {
  const response: AxiosResponse<T> = await _api.patch(url, data);
  return response;
};

export const put = async <T = any>(url: string, data: any, useToken?: string) => {
  const response: AxiosResponse<T> = await _api.put(url, data);
  return response;
};

export const remove = async <T = any>(url: string, useToken?: string) => {
  const response: AxiosResponse<T> = await _api.delete(url);
  return response;
};
