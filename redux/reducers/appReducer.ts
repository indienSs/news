import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type AppStoreType = {
  loggedIn: boolean;
};

const initialState: AppStoreType = {
  loggedIn: false,
};

export const appSlice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export const selectLoggedIn = (state: RootState) => state.app.loggedIn;

export const appReducer = appSlice.reducer;
