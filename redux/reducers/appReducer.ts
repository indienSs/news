import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {UserType} from '../../types/UserType';
import {api} from '../../api';
import {Status} from '../../types/Status';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppStoreType = {
  loggedIn: boolean;
  userInfo: UserType | null;
  status: Status;
};

const initialState: AppStoreType = {
  loggedIn: false,
  userInfo: null,
  status: Status.LOADING,
};

export const fetchAppInfo = createAsyncThunk(
  'appInfo/fetchAppInfo',
  async () => {
    const userInfo = await AsyncStorage.getItem('userInfo');
    if (!userInfo) {
      throw new Error();
    }
    return JSON.parse(userInfo);
  },
);

export const appSlice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserType | null>) {
      state.userInfo = action.payload;
    },
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAppInfo.pending, state => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchAppInfo.fulfilled,
      (state, action: PayloadAction<UserType>) => {
        state.status = Status.SUCCESS;
        state.userInfo = action.payload;
        state.loggedIn = true;
      },
    );
    builder.addCase(fetchAppInfo.rejected, state => {
      state.status = Status.ERROR;
      state.userInfo = null;
      state.loggedIn = false;
    });
  },
});

export const {setUserInfo, setLoggedIn} = appSlice.actions;

export const selectLoggedIn = (state: RootState) => state.app.loggedIn;
export const selectUserInfo = (state: RootState) => state.app.userInfo;

export const appReducer = appSlice.reducer;
