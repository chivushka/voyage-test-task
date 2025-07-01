import { useState, useEffect, useCallback } from 'react';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'react-native-localize';
import i18n from '../../Translation/i18n';

interface UseLanguageReturn {
  selectedLanguage: string;
  setLanguage: (language: string, isManual?: boolean) => Promise<void>;
  getLanguage: () => Promise<string | null>;
  getDeviceLanguage: () => string;
  syncWithDeviceLanguage: () => Promise<void>;
  isManuallySet: boolean;
  resetToDeviceLanguage: () => Promise<void>;
  isLoading: boolean;
}

interface UseLanguageOptions {
  listenToSystemChanges?: boolean;
}

export const useLanguage = (options: UseLanguageOptions = {}): UseLanguageReturn => {
  const { listenToSystemChanges = false } = options;
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isManuallySet, setIsManuallySet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getDeviceLanguage = useCallback((): string => {
    try {
      const locales = getLocales();
      
      if (locales && locales.length > 0) {
        const primaryLocale = locales[0];
        const languageCode = primaryLocale.languageCode.toLowerCase();
        const supportedLanguages = ['en', 'ja'];
        const finalLanguage = supportedLanguages.includes(languageCode) ? languageCode : 'en';
        
        return finalLanguage;
      }
      
      return 'en';
      
    } catch (error) {
      return 'en';
    }
  }, []);

  const getLanguage = useCallback(async (): Promise<string | null> => {
    try {
      const storedLanguage = await AsyncStorage.getItem('language');
      return storedLanguage;
    } catch (error) {
      return null;
    }
  }, []);

  const setLanguage = useCallback(async (language: string, isManual = true): Promise<void> => {
    try {
      setIsLoading(true);
      
      await AsyncStorage.setItem('language', language);
      await AsyncStorage.setItem('languageManuallySet', isManual.toString());
      
      setSelectedLanguage(language);
      setIsManuallySet(isManual);
      
      await i18n.changeLanguage(language);
      
    } catch (error) {
      console.error('Error setting language:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const syncWithDeviceLanguage = useCallback(async (): Promise<void> => {
    try {
      const manuallySetFlag = await AsyncStorage.getItem('languageManuallySet');
      const wasManuallySet = manuallySetFlag === 'true';
      
      if (wasManuallySet) {
        return;
      }
      
      const deviceLang = getDeviceLanguage();
      const currentStoredLang = await getLanguage();
      
      if (deviceLang !== currentStoredLang && deviceLang !== selectedLanguage) {
        await setLanguage(deviceLang, false);
      }
    } catch (error) {
      console.error('Error syncing with device language:', error);
    }
  }, [getDeviceLanguage, getLanguage, setLanguage, selectedLanguage]);

  const resetToDeviceLanguage = useCallback(async (): Promise<void> => {
    try {
      const deviceLang = getDeviceLanguage();
      await setLanguage(deviceLang, false);
    } catch (error) {
      console.error('Error resetting to device language:', error);
    }
  }, [getDeviceLanguage, setLanguage]);

  useEffect(() => {
    if (!listenToSystemChanges) return;

    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        syncWithDeviceLanguage();
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => subscription?.remove();
  }, [listenToSystemChanges, syncWithDeviceLanguage]);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        setIsLoading(true);
        const storedLanguage = await getLanguage();
        const manuallySetFlag = await AsyncStorage.getItem('languageManuallySet');
        const wasManuallySet = manuallySetFlag === 'true';
        
        setIsManuallySet(wasManuallySet);
        
        if (storedLanguage) {
          setSelectedLanguage(storedLanguage);
          await i18n.changeLanguage(storedLanguage);
        } else {
          const deviceLang = getDeviceLanguage();
          await setLanguage(deviceLang, false);
        }
      } catch (error) {
        console.error('Error loading language on initialization:', error);
        const deviceLang = getDeviceLanguage();
        setSelectedLanguage(deviceLang);
        await i18n.changeLanguage(deviceLang);
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguage();
  }, [getLanguage, setLanguage, getDeviceLanguage]);

  return {
    selectedLanguage,
    setLanguage,
    getLanguage,
    getDeviceLanguage,
    syncWithDeviceLanguage,
    isManuallySet,
    resetToDeviceLanguage,
    isLoading,
  };
}; 