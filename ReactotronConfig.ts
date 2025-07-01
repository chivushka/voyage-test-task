import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

declare global {
  interface Console {
    tron: ReactotronReactNative;
  }
}

if (__DEV__) {
  Reactotron
    .setAsyncStorageHandler!(AsyncStorage)
    .configure({
      name: 'Voyage Construction',
      host: '192.168.50.207', 
      port: 9090,
    })
    .useReactNative({
      asyncStorage: true,
      networking: {
        ignoreUrls: /symbolicate/,
      },
      editor: false,
      overlay: false,
    })
    .connect();

  console.tron = Reactotron;

  Reactotron.clear!();
}

export default Reactotron;
