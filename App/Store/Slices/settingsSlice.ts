import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dateFormat: '',
  timeFormat: '',
};

const settingsSlice = createSlice({
  name: 'format',
  initialState,
  reducers: {
    setSettings: (state, action) => {
        state.dateFormat = action.payload.dateFormat.format;
        state.timeFormat = action.payload.timeFormat.format;
      }
  }
});

export const settingsActions = settingsSlice.actions;
export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;