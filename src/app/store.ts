import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cookieReducer from './slices/cookieSlice';
import navigationReducer from './slices/navigationSlice';
import shopReducer from './slices/shopSlice';
import scoreboardReducer from './slices/scoreboardSlice';
import languageReducer from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    cookie: cookieReducer,
    navigation: navigationReducer,
    shop: shopReducer,
    scoreboard: scoreboardReducer,
    language: languageReducer
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
