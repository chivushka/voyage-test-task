import { View, StyleSheet, Alert, Platform, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import Layout from '../../../Core/Layout/Layout';
import Button from '../../../Ui/Button';
import ProjectItem from './ProjectItem';
import InfoSection from '../LoginScreen/InfoSection';
import { useUserLoginData } from '../Hooks/useUserLoginData';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../Library/Hooks/useAuth';

const ChooseProj = ({ navigation }: any) => {
  const { t } = useTranslation();
  const { projectList, navToProject } = useUserLoginData({ navigation })
  const { logout } = useAuth();

  return (
    <Layout custom={styles.loginScreen}>
      <View style={{ height: '90%' }}>
        <InfoSection title={t('ChooseProject')} subTitle={t('SelectProject')} />
        <FlatList
          data={projectList}
          keyExtractor={(item, index) => `${item.ref}-${index}`}
          renderItem={({ item }) => (
            <ProjectItem
              title={item.name}
              subTitle={item?.organization?.name}
              linkto={() => navToProject(item.ref)}
              logoURL={item.logoImage || ''}
              logIntoText={t('LogInto')}
            />
          )}
          onEndReachedThreshold={0.5}
        />
      </View>
      <Button
        disabled={false}
        title={t('LogOut')}
        outlined={true}
        handleClick={logout}
      />
    </Layout>
  );
};

export default ChooseProj;

export const styles = StyleSheet.create({
  loginScreen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '20%',
    paddingBottom: Platform.OS === 'ios' ? '20%' : '5%',
  },
  inputSection: {
  },
});
