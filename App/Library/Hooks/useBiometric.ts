import { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import { useFocusEffect } from '@react-navigation/native';
import { ReactNativeBiometricsLegacy } from 'react-native-biometrics';
import { biometric } from '../BiometrickAuth';

interface BiometricState {
  email: string;
  password: string;
}

interface UseBiometricReturn {
  bioState: BiometricState | undefined;
  isAvailable: boolean;
  isShowFields: boolean;
  checkIsAvailable: () => Promise<void>;
  getCredentials: () => Promise<void>;
  authenticate: (onSuccess: () => void) => Promise<void>;
  saveCredentials: (email: string, password: string) => Promise<void>;
  showFields: () => void;
  setIsShowFields: (show: boolean) => void;
  setBioState: (state: BiometricState | undefined) => void;
}

export const useBiometric = (): UseBiometricReturn => {
  const [bioState, setBioState] = useState<BiometricState | undefined>();
  const [isAvailable, setIsAvailable] = useState(true);
  const [isShowFields, setIsShowFields] = useState(true);

  const checkIsAvailable = useCallback(async () => {
    try {
      const result = await ReactNativeBiometricsLegacy.isSensorAvailable();
      setIsAvailable(result.available);
    } catch (error) {
      console.log('Error checking biometric availability:', error);
      setIsAvailable(false);
    }
  }, []);

  const getCredentials = useCallback(async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        const newBioState = {
          email: credentials.username,
          password: credentials.password,
        };
        setBioState(newBioState);
        
        if (credentials.username && credentials.password && isAvailable) {
          setIsShowFields(false);
        }
      } else {
        console.log('No credentials stored.');
        setBioState(undefined);
      }
    } catch (error) {
      console.log('Error retrieving credentials:', error);
      setBioState(undefined);
    }
  }, [isAvailable]);

  const authenticate = useCallback(async (onSuccess: () => void) => {
    try {
      await biometric?.();
      onSuccess();
    } catch (error) {
      setIsShowFields(true);
      console.log('Biometric authentication error:', error);
      throw error;
    }
  }, []);

  const saveCredentials = useCallback(async (email: string, password: string) => {
    try {
      await Keychain.setGenericPassword(email, password);
      setBioState({ email, password });
      console.log('Credentials saved to keychain successfully');
    } catch (error) {
      console.error('Failed to save credentials to keychain:', error);
      throw error;
    }
  }, []);

  const showFields = useCallback(() => {
    setIsShowFields(true);
  }, []);

  useFocusEffect(
    useCallback(() => {
      checkIsAvailable();
      getCredentials();
    }, [checkIsAvailable, getCredentials])
  );

  const getStoredNames = useCallback(async () => {
    try {
      const [name, lastName] = await Promise.all([
        AsyncStorage.getItem('name'),
        AsyncStorage.getItem('lastName')
      ]);
      return { name, lastName };
    } catch (error) {
      console.log('Error getting stored names:', error);
      return { name: null, lastName: null };
    }
  }, []);

  return {
    bioState,
    isAvailable,
    isShowFields,
    checkIsAvailable,
    getCredentials,
    authenticate,
    saveCredentials,
    showFields,
    setIsShowFields,
    setBioState,
  };
}; 