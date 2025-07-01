import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { UserProject } from '../../Library/Utils/Types/ApiTypes/userModels';

const initialState: {items: UserProject[]} = {items: []};

const projectsDataReducer = createSlice({
  name: 'projectsData',
  initialState: initialState,
  reducers: {
    addProjectsData: (state, action: PayloadAction<UserProject[]>) => {
      state.items = action.payload;
    },
    clearProjectsData: (state) => {
      state.items = [];
    },
  },
});

export const projectsDataReducerActions = projectsDataReducer.actions;
export const {addProjectsData, clearProjectsData} = projectsDataReducerActions;
export default projectsDataReducer.reducer;
