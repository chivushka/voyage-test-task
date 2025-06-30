import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {globalFontStyles, primaryColor} from '../../../../Assets/Styles/styles';
import TextC from '../../../Ui/TextComponent';
import TouchableText from '../../../Ui/TouchableText';
import {BottomTabScreens} from '../../../../Navigation/NestedNav';

interface IRememberLogin {
  navigation: any;
  displayText: any;
}

const RememberLogin: FC<IRememberLogin> = ({navigation, displayText}) => {
  const navToLogin = (): void => {
    navigation.navigate(BottomTabScreens.loginScreenName);
  };

  return (
    <View style={styles.subtitleHelper}>
      <TextC styles={styles.helperText}>{displayText.remember}</TextC>
      <TextC> </TextC>
      <TouchableText
        handleClick={navToLogin}
        customStyles={{...styles.helperText, color: primaryColor}}>
        {displayText.login}
      </TouchableText>
    </View>
  );
};

export default RememberLogin;

const styles = StyleSheet.create({
  subtitleHelper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '2%',
  },
  helperText: {
    ...globalFontStyles.monoLabel,
    fontWeight: 'bold',
  },
});
