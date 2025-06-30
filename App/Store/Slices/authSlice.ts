import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState} from '../../Library/Utils/Types/ApiTypes/userModels';

const initialState: AuthState = {
  isLogged: false,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  isAlert: false,
  isSSO: false,
  alertData: '',
};

const loginStateReducer = createSlice({
  name: 'loginState',
  initialState: initialState,
  reducers: {
    changeIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    changeAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    changeRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
    },
    changeIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    changeIsAlert: (state, action: PayloadAction<boolean>) => {
      state.isAlert = action.payload;
    },
    changeAlertData: (state, action: PayloadAction<string>) => {
      state.alertData = action.payload;
    },
    handleIsSSOLogin: (state, action: PayloadAction<boolean>) => {
      state.isSSO = action.payload;
    },
  },
});

export const loginStateReducerActions = loginStateReducer.actions;
export const {
  changeIsLogged,
  changeAccessToken,
  changeRefreshToken,
  changeIsLoading,
  changeIsAlert,
  changeAlertData,
  handleIsSSOLogin,
} = loginStateReducerActions;
export default loginStateReducer.reducer;
