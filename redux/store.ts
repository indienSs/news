import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {appReducer} from "./reducers/appReducer";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();