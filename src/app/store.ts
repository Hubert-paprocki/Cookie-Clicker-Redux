import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cookieReducer from './slices/cookieSlice';
import appReducer from './slices/appSlice'
import shopReducer from './slices/shopSlice'

export const store = configureStore({
  reducer: {
    cookie: cookieReducer,
    app: appReducer,
    shop:shopReducer
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
