import { Platform } from 'react-native';
import { androidBiometric } from './android';
import { iosBiometric } from './ios';

export const biometric = Platform.select({
  android: androidBiometric,
  ios: iosBiometric,
});
