import {AppDispatch, RootState} from '.';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {loginDataReducerActions} from './Slices/loginSlice';
import {userDataReducerActions} from './Slices/userInfoSlice';
import {loginStateReducerActions} from './Slices/authSlice';
import {projectsDataReducerActions} from './Slices/projectsInfoSlice';
import {selectedProjReducerActions} from './Slices/selectedProjSlice';
import {settingsActions} from './Slices/settingsSlice'


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const allActions = {
  ...loginDataReducerActions,
  ...userDataReducerActions,
  ...loginStateReducerActions,
  ...projectsDataReducerActions,
  ...selectedProjReducerActions,
  ...settingsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
