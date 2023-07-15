import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {UserType} from '../../types/UserType';

type AppStoreType = {
  loggedIn: boolean;
  userInfo: UserType | null;
};

const initialState: AppStoreType = {
  loggedIn: false,
  userInfo: null,
};

export const appSlice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    setUserInfo(action, payload: PayloadAction) {},
  },
});

export const {} = appSlice.actions;

export const selectLoggedIn = (state: RootState) => state.app.loggedIn;
export const selectUserInfo = (state: RootState) => state.app.userInfo;

export const appReducer = appSlice.reducer;
