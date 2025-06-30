import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {
  SettingsState,
  Setting,
} from '../../Library/Utils/Types/ApiTypes/projectModels';

const initialState: SettingsState = {
  settings: [],
};

const projectSettingsSlice = createSlice({
  name: 'loginState',
  initialState: initialState,
  reducers: {
    saveSettings: (state, action: PayloadAction<Setting[]>) => {
      state.settings = action.payload;
    },
  },
});

export const projectSettingsActions = projectSettingsSlice.actions;
export const {} = projectSettingsActions;
export default projectSettingsSlice.reducer;
