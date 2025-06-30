import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import Logo from '../../../../Assets/images/logo/Logo';
import {globalFontStyles, primaryColor} from '../../../../Assets/Styles/styles';
import TextC from '../../../Ui/TextComponent';

interface IInfoSection {
  title: string;
  subTitle: string;
}

const InfoSection: FC<IInfoSection> = ({title, subTitle}) => {
  return (
    <View>
      <View style={styles.logoSection}>
        <Logo color={primaryColor} />
      </View>
      <View>
        <View style={styles.infoSection}>
          <TextC styles={globalFontStyles.h1}>{title}</TextC>
          <TextC styles={globalFontStyles.monoBody}>{subTitle}</TextC>
        </View>
      </View>
    </View>
  );
};

export default InfoSection;

const styles = StyleSheet.create({
  logoSection: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  infoSection: {
    // marginBottom: '5%',
  },
});
