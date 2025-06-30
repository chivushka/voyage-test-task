import { ReactNativeBiometricsLegacy } from 'react-native-biometrics';

export const androidBiometric = async () => {
  const { success } = await ReactNativeBiometricsLegacy.simplePrompt({
    promptMessage: 'Login with Fingerprint',
    cancelButtonText: 'Cancel',
  });

  if (!success) {
    throw new Error('android didn`t pass');
  }
};
