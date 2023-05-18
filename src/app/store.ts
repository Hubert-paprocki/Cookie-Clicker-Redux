import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cookieReducer from './slices/cookieSlice';
import navigationReducer from './slices/navigationSlice'
import boostersReducer from './slices/boostersSlice'

export const store = configureStore({
  reducer: {
    cookie: cookieReducer,
    navigation: navigationReducer,
    boosters:boostersReducer
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
