import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserLogin} from '../../Library/Utils/Types/ApiTypes/userModels';

const initialState: UserLogin = {
  email: '',
  password: '',
};

const loginDataReducer = createSlice({
  name: 'loginData',
  initialState: initialState,
  reducers: {
    addEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    addPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },

  },
});

export const loginDataReducerActions = loginDataReducer.actions;
export const {addEmail, addPassword} = loginDataReducerActions;
export default loginDataReducer.reducer;
