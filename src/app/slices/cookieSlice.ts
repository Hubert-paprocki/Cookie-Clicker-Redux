import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { buyBooster } from './actions';

interface CookieState {
  value: number;
  history: string[];
}

const MAX_HISTORY_LENGTH = 3;

const initialState: CookieState = { value: 0, history: [] };

const setHistory = (state: CookieState, message: string) => {
  state.history.push(message);
  if (state.history.length > MAX_HISTORY_LENGTH) {
    state.history.shift();
  }
};

export const incrementValueInfinitely = (interval: number, cookieVal: number) => (dispatch: Dispatch) => {
  setInterval(() => {
    dispatch(cookieSlice.actions.boosterIncrement({ cookieVal, interval }));
  }, interval);
};

const cookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<{ grannyHandsIsActive: boolean }>) => {
      const { grannyHandsIsActive } = action.payload;
      const earnedCookies = grannyHandsIsActive ? 2 : 1;
      state.value += earnedCookies;
      setHistory(state, `You earned ${earnedCookies} cookie (${state.value})`);
    },
    boosterIncrement: (state, action: PayloadAction<{ cookieVal: number; interval: number }>) => {
      const { cookieVal, interval } = action.payload;
      const earnedCookies = cookieVal || 0;
      state.value += earnedCookies;
      const intervalInSeconds = interval ? interval / 1000 : 0;
      const timeUnit = intervalInSeconds > 1 ? 'seconds' : 'second';
      setHistory(state, `Worker earned ${earnedCookies} cookie in ${intervalInSeconds} ${timeUnit} (${state.value})`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyBooster, (state, action: PayloadAction<{ id: number; price: number; name: string }>) => {
      state.value -= action.payload.price;
      setHistory(state, `You bought ${action.payload.name} for ${action.payload.price} cookie`);
    });
  },
});

export const { increment } = cookieSlice.actions;
export default cookieSlice.reducer;
