import { getUserData } from '../../Network/ApiActions/UserActions/userActions';
import { addProjectsData } from '../../Store/Slices/projectsInfoSlice';
import { UserData, UserProject } from './Types/ApiTypes/userModels';

export const fetchProjects = async (dispatch: any, projectsFromStore?: UserProject[]) => {
  if (projectsFromStore && projectsFromStore.length > 0) {
    console.log('Projects already available in store, skipping API call');
    return { success: true, projects: projectsFromStore };
  }

  try {
    console.log('Fetching projects from API...');
    const userData: UserData = await getUserData();
    
    if (userData?.projects && userData.projects.length > 0) {
      dispatch(addProjectsData(userData.projects as UserProject[]));
      console.log(`Successfully loaded ${userData.projects.length} projects into Redux store`);
      return { success: true, projects: userData.projects };
    } else {
      console.log('No projects found in API response');
      dispatch(addProjectsData([]));
      return { success: true, projects: [] };
    }
  } catch (error: any) {
    console.error('Error fetching projects:', error);
    dispatch(addProjectsData([]));
    return { success: false, error: error?.message || 'Failed to load projects' };
  }
}; 