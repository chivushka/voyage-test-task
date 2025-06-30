import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import TextC from '../TextComponent';
import {dangerBG, dangerDark} from '../../../Assets/Styles/styles';

interface IWarning {
  title: string;
  subtitle: string;
}

const DefaultWarning: FC<IWarning> = ({title, subtitle}) => {
  return (
    <View style={styles.warningContainer}>
      {title && <TextC styles={styles.dangerTitle}>{title}</TextC>}
      <TextC styles={styles.dangerSubtitle}>{subtitle}</TextC>
    </View>
  );
};

export default DefaultWarning;

const styles = StyleSheet.create({
  warningContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: dangerBG,
    marginBottom: 25,
    borderRadius: 5,
  },
  dangerTitle: {
    color: dangerDark,
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 10,
  },
  dangerSubtitle: {
    color: dangerDark,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
  },
});
