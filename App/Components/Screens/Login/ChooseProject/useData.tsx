import { useAppDispatch, } from '../../../../Store/hooks';
import {
  changeAccessToken,
  changeIsLoading,
  changeIsLogged,
} from '../../../../Store/Slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getDetailsData,
  getUserData,
} from '../../../../Network/ApiActions/UserActions/userActions';
import { BottomTabScreens } from '../../../../Navigation/NestedNav';

import { UserData, UserProject } from '../../../../Library/Utils/Types/ApiTypes/userModels';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

interface IArgs {
  navigation: any;
}

export const useData = ({ navigation }: IArgs) => {
  const dispatch = useAppDispatch();
  const [projectList, setProjectList] = useState<UserProject[]>([]);

  useEffect(() => {
    fetchProjects();
    getDetails();
  }, []);

  const saveName = async (a: string, b: string) => {
    Promise.all([
      await AsyncStorage.setItem('name', a),
      await AsyncStorage.setItem('lastName', b),
    ]);
  };

  const getDetails = async (): Promise<void> => {
    const res = await getDetailsData();
    if (res.lastName && res.firstName) {
      await saveName(res.firstName, res.lastName);
    }
  };

  const fetchProjects = async () => {
    try {
      dispatch(changeIsLoading(true));

      const response: UserData = await getUserData();
      setProjectList(prev => [...prev, ...response.projects]);
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to load projects.');
    } finally {
      dispatch(changeIsLoading(false));
    }
  };

  const logOut = () => {
    AsyncStorage.removeItem('userToken');
    dispatch(changeIsLoading(true));
    dispatch(changeAccessToken(null));
    dispatch(changeIsLogged(false));
    navigation.navigate(BottomTabScreens.loginScreenName);
    dispatch(changeIsLoading(false));
  };

  const navToProject = (ref: string): void => {
    projectList?.map((item) => {
      if (item.ref === ref) {
        AsyncStorage.setItem('selectedRef', item.ref);
      }
    });
    dispatch(changeIsLogged(true));
  };

  return {
    projectList,
    navToProject,
    logOut
  }
}