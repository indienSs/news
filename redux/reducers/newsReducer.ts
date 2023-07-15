import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {NewsType} from '../../types/NewsType';
import {api} from '../../api';
import {Status} from '../../types/Status';

type NewsStoreType = {
  news: NewsType[];
  status: Status;
};

const initialState: NewsStoreType = {
  news: [],
  status: Status.LOADING,
};

export const fetchNews = createAsyncThunk('newsInfo/fetchNews', async () => {
  const {data} = await api.get<NewsType[]>('/news');
  return data;
});

export const newsSlice = createSlice({
  name: 'newsInfo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.status = Status.LOADING;
      state.news = [];
    });
    builder.addCase(
      fetchNews.fulfilled,
      (state, action: PayloadAction<NewsType[]>) => {
        state.status = Status.SUCCESS;
        state.news = action.payload;
      },
    );
    builder.addCase(fetchNews.rejected, state => {
      state.status = Status.ERROR;
      state.news = [];
    });
  },
});

export const selectNews = (state: RootState) => state.news.news;
export const selectNewsStatus = (state: RootState) => state.news.status;

export const newsReducer = newsSlice.reducer;
