import TouchID from 'react-native-touch-id';

export const iosBiometric = async () => {
  await TouchID.authenticate('Authenticate with Touch ID/Face ID');
};
