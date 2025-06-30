import Auth0 from 'react-native-auth0';
import Config from 'react-native-config';

export const auth0 = new Auth0({
  domain: 'voyagecontrol.us.auth0.com',
  clientId: Config.REACT_APP_SSO_CLIENT_ID as string,
});