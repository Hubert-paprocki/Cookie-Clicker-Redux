import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cookieReducer from './slices/cookieSlice';
import appReducer from './slices/appSlice'
import storeReducer from './slices/storeSlice'
export const store = configureStore({
  reducer: {
    cookie: cookieReducer,
    app: appReducer,
    store: storeReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
