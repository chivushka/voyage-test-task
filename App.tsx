import React from 'react';
import { Provider } from 'react-redux';
import store from './App/Store';
import { Mixpanel } from 'mixpanel-react-native';
import Config from 'react-native-config';
import 'react-native-gesture-handler';
import NestedNav from './App/Navigation/NestedNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { I18nextProvider } from 'react-i18next';
import i18n from './App/Translation/i18n';

import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

const App = () => {
  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel(
    `${Config.MIXPANEL_TOKEN}`,
    trackAutomaticEvents,
  );
  mixpanel.init().then()


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <NestedNav />
          </Provider>
        </QueryClientProvider>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
