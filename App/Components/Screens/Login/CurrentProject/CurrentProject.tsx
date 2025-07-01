import { View, StyleSheet, Alert, Platform, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import Layout from '../../../Core/Layout/Layout';
import InfoSection from '../LoginScreen/InfoSection';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../Store/hooks';
import { setAsyncStorage } from '../../../../Network/ApiService';
import Button from '../../../Ui/Button';
import { getUserData } from '../../../../Network/ApiActions/UserActions/userActions';
const CurrentProj = ({ navigation }: any) => {
  const { t } = useTranslation();
  const selectedProject = useAppSelector((state) => state.selectedProjData.selectedProject);
  
  const changeToken = ()=>{
    setAsyncStorage('userToken', 'invalidToken');
    setAsyncStorage('refreshToken', 'invalidToken');
  }

  const tryToGetUserData = async ()=>{
    const response = await getUserData();
    console.log(response);
  }

  return (
    <Layout custom={styles.loginScreen}>
      <View style={{ height: '90%', display: 'flex', flexDirection: 'column' }}>
        <InfoSection title={selectedProject?.name || t('ChooseProject')} subTitle={selectedProject?.organization?.name || t('SelectProject')} />
        <Button title="Set invalid token" handleClick={changeToken} propStyles={{ marginTop: 10 }}/>
        <Button title="Try to get user data" handleClick={tryToGetUserData} propStyles={{ marginTop: 10 }}/>
      </View>
    </Layout>
  );
};

export default CurrentProj;

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