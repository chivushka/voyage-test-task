import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { UserProject } from '../../Library/Utils/Types/ApiTypes/userModels';

interface SelectedProjState {
  selectedProject: UserProject | null;
}

const initialState: SelectedProjState = {
  selectedProject: null,
};

const selectedProjReducer = createSlice({
  name: 'selectedProjData',
  initialState,
  reducers: {
    addSelectedProj: (state, action: PayloadAction<UserProject>) => {
      state.selectedProject = action.payload;
    },
  },
});

export const selectedProjReducerActions = selectedProjReducer.actions;
export const {addSelectedProj} = selectedProjReducerActions;
export default selectedProjReducer.reducer;
