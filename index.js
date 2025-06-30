/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: function (token) {},
  onNotification: function (notification) {},
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
  actions: ['Action 1', 'Action 2', 'Action 3'],
  largeIcon: '',
  smallIcon: 'ic_notification_icon',
});

AppRegistry.registerComponent(appName, () => App);
