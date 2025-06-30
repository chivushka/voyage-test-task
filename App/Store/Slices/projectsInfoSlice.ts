import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ProjectsData,
  Result,
} from '../../Library/Utils/Types/ApiTypes/projectModels';

const initialState: {items: Result[]} = {items: []};

const projectsDataReducer = createSlice({
  name: 'projectsData',
  initialState: initialState,
  reducers: {
    addProjectsData: (state, action: PayloadAction<Result[]>) => {
      state.items = action.payload;
    },
  },
});

export const projectsDataReducerActions = projectsDataReducer.actions;
export const {addProjectsData} = projectsDataReducerActions;
export default projectsDataReducer.reducer;
