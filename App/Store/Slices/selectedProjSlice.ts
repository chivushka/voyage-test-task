import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ProjectsData, Result } from '../../Library/Utils/Types/ApiTypes/projectModels';
import {UserData} from '../../Library/Utils/Types/ApiTypes/userModels';

const initialState: string = '';

const selectedProjReducer = createSlice({
  name: 'selectedProjData',
  initialState: initialState,
  reducers: {
    addSelectedProj: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
  },
});

export const selectedProjReducerActions = selectedProjReducer.actions;
export const {addSelectedProj} = selectedProjReducerActions;
export default selectedProjReducer.reducer;
