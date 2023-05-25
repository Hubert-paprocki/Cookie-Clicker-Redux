import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { buyBooster } from './actions';

export interface HistoryItem {
  type: string;
  cookieVal: number;
  price?: number;
  boosterId?: number;
  earnedCookiesVal?: number;
  interval?: number;
}

interface CookieState {
  value: number;
  history: HistoryItem[];
}

const MAX_HISTORY_LENGTH = 3;

const initialState: CookieState = { value: 0, history: [] };

const setHistory = (state: CookieState, message: HistoryItem) => {
  state.history.push(message);
  if (state.history.length > MAX_HISTORY_LENGTH) {
    state.history.shift();
  }
};

export const incrementValueInfinitely = (interval: number, cookieVal: number) => (
  dispatch: Dispatch
) => {
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
      const earnedCookiesVal = grannyHandsIsActive ? 2 : 1;
      state.value += earnedCookiesVal;
      setHistory(state, {
        type: 'earn',
        cookieVal: state.value,
        earnedCookiesVal,
      });
    },
    boosterIncrement: (
      state,
      action: PayloadAction<{ cookieVal: number; interval: number }>
    ) => {
      const { cookieVal, interval } = action.payload;
      const earnedCookiesVal = cookieVal;
      state.value += earnedCookiesVal;
      const intervalInSeconds = interval / 1000;
      setHistory(state, {
        type: 'autoEarn',
        cookieVal: state.value,
        earnedCookiesVal,
        interval: intervalInSeconds,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      buyBooster,
      (
        state,
        action: PayloadAction<{ id: number; price: number; name: string }>
      ) => {
        const { price, id } = action.payload;
        state.value -= price;
        const historyItem: HistoryItem = {
          type: 'boughtItem',
          price,
          boosterId: id,
          cookieVal: state.value,
        };
        setHistory(state, historyItem);
      }
    );
  },
});

export const { increment } = cookieSlice.actions;
export default cookieSlice.reducer;