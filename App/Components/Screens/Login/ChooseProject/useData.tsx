import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import {
  changeAccessToken,
  changeIsLoading,
  changeIsLogged,
  changeRefreshToken,
} from '../../../../Store/Slices/authSlice';
import { addSelectedProj } from '../../../../Store/Slices/selectedProjSlice';
import { clearProjectsData } from '../../../../Store/Slices/projectsInfoSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getDetailsData,
} from '../../../../Network/ApiActions/UserActions/userActions';
import { fetchProjects as fetchProjectsUtil } from '../../../../Library/Utils/projectUtils';
import { BottomTabScreens } from '../../../../Navigation/NestedNav';

import { UserProject } from '../../../../Library/Utils/Types/ApiTypes/userModels';
import { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';

interface IArgs {
  navigation: any;
}

export const useData = ({ navigation }: IArgs) => {
  const dispatch = useAppDispatch();
  const [isProjectsLoading, setIsProjectsLoading] = useState(false);
  
  const projectsFromStore = useAppSelector((state) => state.projectsData.items);
  
  const projectList = (projectsFromStore || []) as UserProject[];

  useEffect(() => {
    fetchProjects();
    getDetails();
  }, []);

  const saveName = useCallback(async (a: string, b: string) => {
    await Promise.all([
      AsyncStorage.setItem('name', a),
      AsyncStorage.setItem('lastName', b),
    ]);
  }, []);

  const getDetails = useCallback(async (): Promise<void> => {
    try {
      const res = await getDetailsData();
      if (res?.lastName && res?.firstName) {
        await saveName(res.firstName, res.lastName);
      }
    } catch (error) {
      console.error('Error getting user details:', error);
    }
  }, [saveName]);

  const fetchProjects = useCallback(async () => {
    if (projectsFromStore && projectsFromStore.length > 0) {
      console.log('Projects already available in store, skipping API call');
      return;
    }

    if (isProjectsLoading) {
      console.log('Already loading projects, skipping duplicate call');
      return;
    }
    
    try {
      setIsProjectsLoading(true);
      dispatch(changeIsLoading(true));

      const result = await fetchProjectsUtil(dispatch, projectsFromStore);
      
      if (!result.success) {
        Alert.alert('Error', result.error || 'Failed to load projects. Please try again.');
      }
    } catch (error: any) {
      console.error('Error fetching projects:', error);
      Alert.alert('Error', error?.message || 'Failed to load projects. Please try again.');
    } finally {
      setIsProjectsLoading(false);
      dispatch(changeIsLoading(false));
    }
  }, [dispatch, isProjectsLoading, projectsFromStore]);

  const logOut = useCallback(() => {
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('refreshToken');
    AsyncStorage.removeItem('selectedRef');
    dispatch(changeIsLoading(true));
    dispatch(changeAccessToken(null));
    dispatch(changeRefreshToken(null));
    dispatch(changeIsLogged(false));
    dispatch(clearProjectsData());
    navigation.navigate(BottomTabScreens.loginScreenName);
    dispatch(changeIsLoading(false));
  }, [dispatch, navigation]);

  const navToProject = useCallback((ref: string): void => {
    const selectedProject = projectList.find(item => item.ref === ref);
    if (selectedProject) {
      AsyncStorage.setItem('selectedRef', selectedProject.ref);
      dispatch(addSelectedProj(selectedProject));
      dispatch(changeIsLogged(true));
    } else {
      console.warn(`Project with ref ${ref} not found in project list`);
    }
  }, [projectList, dispatch]);

  return {
    projectList,
    navToProject,
    logOut,
    isProjectsLoading,
    hasProjects: projectList.length > 0,
    refetchProjects: fetchProjects,
  }
}