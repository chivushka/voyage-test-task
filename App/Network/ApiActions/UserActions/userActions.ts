import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {
  Contacts,
  Project,
} from '../../../Library/Utils/Types/ApiTypes/projectDetailsModels';
import {
  Owner,
  ProjectsData,
} from '../../../Library/Utils/Types/ApiTypes/projectModels';
import {UserData} from '../../../Library/Utils/Types/ApiTypes/userModels';
import {ApiUrl} from '../../Utils/ApiUrl';

export const getUserData = async () => {
  const token: string | null = await AsyncStorage.getItem('userToken');
  const response: AxiosResponse<UserData> = await axios(
    ApiUrl.authModule.authUserApi,
    {
      headers: {Authorization: `JWT ${token}`},
    },
  );
  return response.data;
};

export const getSitesData = async () => {
  try {
    const token: string | null = await AsyncStorage.getItem('userToken');
    const ref = await AsyncStorage.getItem('selectedRef');
    const siteId = await getSiteId();

    const siteData: AxiosResponse<any> = await axios(
      `${ApiUrl.default.default}/sites/?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );

    return siteData.data.results.find(({id}: any) => id == siteId);
  } catch (e) {
    console.log('getSitesData error', e);
  }
};

export const getProjectList = async (page = 1) => {
  const token: string | null = await AsyncStorage.getItem('userToken');
  const user = await getUserData();

  const link = `${ApiUrl.authModule.userProjectList}?page=${page}&ref=${user.ref}&region=1`;

  const response: AxiosResponse<ProjectsData> = await axios.get(link, {
    headers: {Authorization: `JWT ${token}`},
  });

  return response.data;
};

export const getSiteId = async (selectedRef?: string) => {
  const token: string | null = await AsyncStorage.getItem('userToken');
  const ref = await AsyncStorage.getItem('selectedRef');

  try {
    const siteData: AxiosResponse<any> = await axios(
      `${ApiUrl.default.default}/sites/?project=${
        selectedRef ? selectedRef : ref
      }`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return siteData.data.results[0].id;
  } catch (e: any) {
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    } else {
      console.log('getSiteId error', e);
    }
  }
};

export const getContactsData = async (ref: string) => {
  const token: string | null = await AsyncStorage.getItem('userToken');
  const siteId = await getSiteId();
  try {
    const contactsRes: AxiosResponse<Contacts> = await axios(
      `${ApiUrl.siteManagement.getSiteList}${siteId}/contacts/?is_active=true&project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return contactsRes.data as Contacts;
  } catch (e: any) {
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    } else {
      console.log('getSelectedProjData error', e);
    }
  }
};

export const getSelectedProjData = async (ref: string) => {
  const token: string | null = await AsyncStorage.getItem('userToken');
  const siteId = await getSiteId();

  try {
    const mainRes: AxiosResponse<Project> = await axios(
      `${ApiUrl.siteManagement.getSiteDetail}${ref}/?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return {
      main: mainRes.data,
      siteId: siteId,
    } as any;
  } catch (e: any) {
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    } else {
      console.log('getSelectedProjData error', e);
    }
  }
};

export const getProjectSettings = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  try {
    const res = await axios(
      `${ApiUrl.profileModule.getProjectSettings}?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return res.data;
  } catch (e: any) {
    console.log('getProjectSettings error', e);
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const getDetailsData = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  try {
    const mainRes = await axios(
      `${ApiUrl.profileModule.addUserDetail}?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );

    return mainRes.data;
  } catch (e: any) {
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};
export const postDetailsData = async (body: Owner) => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');

  try {
    const res = await axios.patch(
      `${ApiUrl.profileModule.addUserDetail}?project=${ref}`,
      {
        email: body.email,
        data: {
          first_name: body.firstName,
          last_name: body.lastName,
          mobile: body.mobile,
        },
      },
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return res.data;
  } catch (e) {
    console.log('postDetailsData error', e);
  }
};
export const getLanguages = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  try {
    const mainRes = await axios(
      `${ApiUrl.profileModule.getLanguages}/?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return mainRes.data;
  } catch (e: any) {
    console.log('getLanguages error', e);
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};
export const getDates = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  try {
    const mainRes = await axios(
      `${ApiUrl.profileModule.getDateFormates}/?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return mainRes.data;
  } catch (e: any) {
    console.log('getDates error', e);
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const getTimes = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  try {
    const mainRes = await axios(
      `${ApiUrl.profileModule.getTimeFormates}/?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return mainRes.data;
  } catch (e: any) {
    console.log('getTimes error', e);
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const getCalendarDays = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  try {
    const mainRes = await axios(
      `${ApiUrl.profileModule.getCalenderDays}/?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return mainRes.data;
  } catch (e: any) {
    console.log('getCalendarDays error', e);
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const getPreferencesData = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  try {
    const mainRes = await axios(
      `${ApiUrl.profileModule.getAccountUserPreferenceDetails}/?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    if (mainRes.data) {
      return mainRes.data;
    }
  } catch (e: any) {
    console.log('getPreferencesData error', e.response);
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const getOrganizationData = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');

  try {
    const mainRes = await axios(
      `${ApiUrl.profileModule.getOrganizationDetails}?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return mainRes.data;
  } catch (e: any) {
    console.log('getOrganizationData error', e);
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const getUsersData = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');

  try {
    const mainRes = await axios(
      `${ApiUrl.profileModule.addUserDetail}?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return mainRes.data;
  } catch (e: any) {
    console.log('getUsersData error', e);
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const postOrganizationData = async (body: any, id: number) => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  try {
    const res = await axios.patch(
      `${ApiUrl.profileModule.updateOrganizationDetails}${id}/?project=${ref}`,
      body,
      {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'multipart/form-data',
          Accept: '*/*',
        },
      },
    );
    return res;
  } catch (e: any) {
    console.log('postOrganizationData error', e);
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const postPreferencesdata = async (body: any) => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  try {
    const res = await axios.patch(
      `${ApiUrl.profileModule.getAccountUserPreferenceDetails}?project=${ref}`,
      body,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return res.data;
  } catch (e) {
    console.log('postPreferencesdata error', e);
  }
};

export const postNotesData = async (note: string, bookingRef: string) => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  const siteId = await getSiteId();

  try {
    const res = await axios.post(
      `${ApiUrl.booking.getBookingList}${bookingRef}/notes/?project=${ref}&site_id=${siteId}`,
      {
        note: note,
      },
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return res.data;
  } catch (e) {
    console.log('postNotesData error', e);
  }
};
