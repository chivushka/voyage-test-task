import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert} from 'react-native';
import {ApiUrl} from '../../Utils/ApiUrl';
import {getSiteId} from '../UserActions/userActions';

export const getDetails = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');

  try {
    const res = await axios(
      `${ApiUrl.profileModule.getBookingDetailData}?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return res.data;
  } catch (e: any) {
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const getProjectDetails = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');

  try {
    const res = await axios(
      `${ApiUrl.profileModule.getProjectDetailsCall}?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return res.data.results;
  } catch (e: any) {
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const getSlots = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');

  try {
    const res = await axios(`${ApiUrl.Availability.getTimes}?project=${ref}`, {
      headers: {Authorization: `JWT ${token}`},
    });
    return res.data;
  } catch (e: any) {
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const getAvability = async () => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const siteId = await AsyncStorage.getItem('selectedSiteId');
  const token: string | null = await AsyncStorage.getItem('userToken');

  try {
    const res = await axios(
      `${ApiUrl.Availability.getAvailablity}${siteId}/site/?project=${ref}`,
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );
    return res.data;
  } catch (e: any) {
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};

export const undoStatus = async (bookingRef: string) => {
  const ref = await AsyncStorage.getItem('selectedRef');
  const token: string | null = await AsyncStorage.getItem('userToken');
  const siteId = await getSiteId();

  try {
    const res = await axios.put(
      `${ApiUrl.booking.undoStatus}${bookingRef}/status/undo/?project=${ref}&site_id=${siteId}`,
      {
        apply_to_all_recurring: false,
      },
      {
        headers: {Authorization: `JWT ${token}`},
      },
    );

    return res.data;
  } catch (e: any) {
    if (
      e.response.data.error ===
      'ERR_project_not_active_deleted_or_status_not_allowed'
    ) {
      Alert.alert('This project has been deleted or status not allowed.');
    }
  }
};
