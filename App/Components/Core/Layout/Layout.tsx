import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar, Dimensions,
} from 'react-native';
import React, { FC, ReactNode } from 'react';
import Loader from '../../Ui/Loader';
import { useAppSelector } from '../../../Store/hooks';
// import {defaultPadding} from '../../../Assets/Styles/styles';

interface ILayout {
  children: ReactNode;
  custom?: Object;
}

const Layout: FC<ILayout> = ({ children, custom }) => {
  const loginState = useAppSelector(state => state.loginState);

  return loginState.isLoading ? (
    <Loader />
  ) : Platform.OS === 'ios' ? (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ ...styles.safeArea, ...custom }}>{children}</View>
    </SafeAreaView>
  ) : (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
      <View style={{ ...styles.safeArea, ...custom }}>{children}</View>
    </ScrollView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: '4.75%',
    backgroundColor: 'white',
    // minHeight: '100%',
    // minWidth: '100%',
  },
});
