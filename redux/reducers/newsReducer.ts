import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {NewsType} from '../../types/NewsType';

type NewsStoreType = {
  news: NewsType[];
};

const initialState: NewsStoreType = {
  news: [],
};

export const newsSlice = createSlice({
  name: 'newsInfo',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = newsSlice.actions;

export const selectNews = (state: RootState) => state.news.news;

export const newsReducer = newsSlice.reducer;
