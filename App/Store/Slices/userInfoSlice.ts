import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../Library/Utils/Types/ApiTypes/userModels';

const initialState: UserData = {
  id: 1,
  ref: '',
  isAdmin: false,
  isGlobalAdminUser: false,
  email: '',
  isActive: false,
  projectList: [],
  lastLogin: '',
  createdAt: '',
  modifiedAt: '',
};

const userDataReducer = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<UserData>) => {
      return action.payload;
    },
  },
});

export const userDataReducerActions = userDataReducer.actions;
export const { addUserData } = userDataReducerActions;
export default userDataReducer.reducer;
