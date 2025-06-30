import axios, {AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const timeout: number = 300000;

export const _api = axios.create({
  timeout,
  headers: {'Content-Type': 'application/json', Accept: '*/*'},
  withCredentials: false,
  responseType: 'json',
});

_api.interceptors.request.use(config => {
  config.baseURL = Config.REACT_APP_BASEURL;

  try {
    const token = getToken();
    config.headers!.Authorization = `JWT ${token}`;
  } catch (err) {
    console.error(err);
  }
  return config;
});

export const _apiAuth0 = axios.create({
  timeout,
  headers: {'Content-Type': 'application/json', Accept: '*/*'},
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

const tokenHeaders = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const headers = {headers: {Authorization: `JWT ${token}`}};
  return headers;
};

const getToken = async () => {
  const token = await AsyncStorage.getItem('userToken');
  return token;
};

export const get = async (url: string) => {
  const headers = await tokenHeaders();
  const response = await _api.get(url, headers);
  return response;
};

export const post = async (url: string, data: any, useToken?: string) => {
  const headers = await tokenHeaders();
  const response = await _api.post(url, data, headers);
  return response;
};

export const postAuth0 = async (url: string, data: any) => {
  const response = await _apiAuth0.post(url, data);
  return response;
};

export const postWithoutHeaders = async (
  url: string,
  data: any,
  useToken?: string,
) => {
  const response = await _api.post(url, data);
  return response;
};

export const postData = async <T>(
  url: string,
  data: any,
  useToken?: string,
) => {
  const headers = await tokenHeaders();
  const response: AxiosResponse<T> = await _api.post(url, data, headers);
  return response;
};

export const patch = async (url: string, data: any, useToken?: string) => {
  const headers = await tokenHeaders();
  const response = await _api.patch(url, data, headers);
  return response;
};
export const put = async (url: string, data: any, useToken?: string) => {
  const headers = await tokenHeaders();
  const response = await _api.put(url, data, headers);
  return response;
};

export const remove = async (url: string, useToken?: string) => {
  const headers = await tokenHeaders();
  const response = await _api.delete(url, headers);
  return response;
};
