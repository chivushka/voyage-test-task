import React, { FC, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  AppState,
} from 'react-native';
import { useLanguage } from '../../Library/Hooks/useLanguage';
import {
  monoBlack,
  primaryColor,
} from '../../Assets/Styles/styles';

interface ILanguageSelector {
  showTitle?: boolean;
  showStatus?: boolean;
  showResetButton?: boolean;
  containerStyle?: any;
  compact?: boolean;
}

const LanguageSelector: FC<ILanguageSelector> = ({
  showTitle = true,
  showStatus = true,
  showResetButton = true,
  containerStyle,
  compact = false,
}) => {
  const {
    selectedLanguage,
    setLanguage,
    resetToDeviceLanguage,
    isManuallySet,
    getDeviceLanguage,
    syncWithDeviceLanguage
  } = useLanguage({ 
    listenToSystemChanges: true
  });

  useEffect(() => {
    syncWithDeviceLanguage();
  
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        syncWithDeviceLanguage();
      }
    };
  
    const subscription = AppState.addEventListener('change', handleAppStateChange);
  
    return () => subscription?.remove();
  }, [syncWithDeviceLanguage]);

  const handleLanguageChange = async (lang: 'en' | 'ja') => {
    try {
      await setLanguage(lang, true);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const handleResetLanguage = async () => {
    try {
      await resetToDeviceLanguage();
    } catch (error) {
      console.error('Error resetting language:', error);
    }
  };

  const styles = getStyles(compact);

  return (
    <View style={[styles.container, containerStyle]}>
      {showTitle && (
        <View>
          {showStatus ? (
            <>
              <Text style={styles.currentLanguage}>
                {selectedLanguage === 'en' ? 'English' : '日本語'}
              </Text>
              <Text style={styles.statusText}>
                {isManuallySet ? 'Manually Selected' : 'Auto-Detected'}
              </Text>
            </>
          ) : (
            <Text style={styles.title}>Language</Text>
          )}
        </View>
      )}
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.langButton, selectedLanguage === 'en' && styles.activeLangButton]}
          onPress={() => handleLanguageChange('en')}
        >
          <Text style={[styles.langButtonText, selectedLanguage === 'en' && styles.activeLangButtonText]}>
            English
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.langButton, selectedLanguage === 'ja' && styles.activeLangButton]}
          onPress={() => handleLanguageChange('ja')}
        >
          <Text style={[styles.langButtonText, selectedLanguage === 'ja' && styles.activeLangButtonText]}>
            日本語
          </Text>
        </TouchableOpacity>
        
        {showResetButton && (
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleResetLanguage}
          >
            <Text style={styles.resetButtonText}>
              {compact ? 'Reset' : 'Reset to Device'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default LanguageSelector; 

const getStyles = (compact: boolean) => StyleSheet.create({
  container: {
    marginVertical: compact ? 10 : 20,
    paddingHorizontal: compact ? 10 : 15,
  },
  title: {
    fontSize: compact ? 12 : 14,
    fontWeight: '600',
    color: monoBlack,
    textAlign: 'center',
    marginBottom: compact ? 5 : 10,
  },
  currentLanguage: {
    fontSize: compact ? 14 : 16,
    fontWeight: '700',
    color: primaryColor,
    textAlign: 'center',
    marginBottom: compact ? 3 : 5,
  },
  statusText: {
    fontSize: compact ? 10 : 12,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
    marginBottom: compact ? 5 : 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langButton: {
    flex: 1,
    paddingVertical: compact ? 8 : 10,
    paddingHorizontal: compact ? 8 : 12,
    marginHorizontal: compact ? 3 : 5,
    borderRadius: compact ? 6 : 8,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  activeLangButton: {
    backgroundColor: primaryColor,
    borderColor: primaryColor,
    shadowColor: primaryColor,
    shadowOpacity: 0.3,
    elevation: 4,
  },
  langButtonText: {
    fontSize: compact ? 11 : 13,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
  },
  activeLangButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  resetButton: {
    flex: 1,
    paddingVertical: compact ? 8 : 10,
    paddingHorizontal: compact ? 8 : 12,
    marginHorizontal: compact ? 3 : 5,
    borderRadius: compact ? 6 : 8,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  resetButtonText: {
    fontSize: compact ? 10 : 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
  },
});

