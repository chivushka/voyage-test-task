import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { monoBlack, primaryColor } from '../../../../Assets/Styles/styles';

interface IBiometricLoginSection {
  email: string;
  bioEmail?: string;
  onSwitchToForm: () => void;
}

const BiometricLoginSection: FC<IBiometricLoginSection> = ({
  email,
  bioEmail,
  onSwitchToForm,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.emailDisplay}>
        {email ?? bioEmail}
      </Text>
      <Text style={styles.switchText} onPress={onSwitchToForm}>
        {t('Switch')}
      </Text>
    </View>
  );
};

export default BiometricLoginSection; 

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  emailDisplay: {
    color: monoBlack,
    fontSize: 18,
    lineHeight: 32,
    fontWeight: '700',
    marginTop: '10%',
  },
  switchText: {
    color: primaryColor,
    fontSize: 13,
    lineHeight: 22,
    fontWeight: '600',
    marginTop: '10%',
  },
});

