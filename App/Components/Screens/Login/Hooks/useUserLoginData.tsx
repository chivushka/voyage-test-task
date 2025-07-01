import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import {
  changeIsLoading,
  changeIsLogged,
} from '../../../../Store/Slices/authSlice';
import { addSelectedProj } from '../../../../Store/Slices/selectedProjSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getDetailsData,
} from '../../../../Network/ApiActions/UserActions/userActions';
import { fetchProjects as fetchProjectsUtil } from '../../../../Library/Utils/projectUtils';

import { UserProject } from '../../../../Library/Utils/Types/ApiTypes/userModels';
import { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';

interface IArgs {
  navigation: any;
}

export const useUserLoginData = ({ navigation }: IArgs) => {
  const dispatch = useAppDispatch();
  const [isProjectsLoading, setIsProjectsLoading] = useState(false);
  
  const projectsFromStore = useAppSelector((state) => state.projectsData.items);
  
  const projectList = (projectsFromStore || []) as UserProject[];

  useEffect(() => {
    if (!projectsFromStore || projectsFromStore.length === 0) {
      fetchProjects();
    }
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
      console.log('Projects already available in store (loaded during login), skipping API call');
      return;
    }

    if (isProjectsLoading) {
      console.log('Already loading projects, skipping duplicate call');
      return;
    }
    
    try {
      console.log('Fetching projects from ChooseProject screen...');
      setIsProjectsLoading(true);
      dispatch(changeIsLoading(true));

      const result = await fetchProjectsUtil(dispatch, projectsFromStore);
      
      if (!result.success) {
        Alert.alert('Error', result.error || 'Failed to load projects. Please try again.');
      } else {
        console.log('Projects fetched successfully from ChooseProject screen');
      }
    } catch (error: any) {
      console.error('Error fetching projects:', error);
      Alert.alert('Error', error?.message || 'Failed to load projects. Please try again.');
    } finally {
      setIsProjectsLoading(false);
      dispatch(changeIsLoading(false));
    }
  }, [dispatch, isProjectsLoading, projectsFromStore]);


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
    isProjectsLoading,
    hasProjects: projectList.length > 0,
    refetchProjects: fetchProjects,
  }
} 