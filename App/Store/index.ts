import {configureStore} from '@reduxjs/toolkit';
import loginDataReducer from './Slices/loginSlice';
import userDataReducer from './Slices/userInfoSlice';
import loginStateReducer from './Slices/authSlice';
import projectsDataReducer from './Slices/projectsInfoSlice';
import selectedProjReducer from './Slices/selectedProjSlice';
import settingsReducer from './Slices/settingsSlice';
import projectSettingsReducer from './Slices/projectSettingsSlice';

const store = configureStore({
  reducer: {
    loginData: loginDataReducer,
    userData: userDataReducer,
    loginState: loginStateReducer,
    projectsData: projectsDataReducer,
    selectedProjData: selectedProjReducer,
    settings: settingsReducer,
    projectSettings: projectSettingsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
