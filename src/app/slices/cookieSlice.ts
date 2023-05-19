import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { buy } from './actions';

interface CookieState {
  value: number;
}

interface IncrementPayload {
  grannyHandsIsActive: boolean;
}

const initialState: CookieState = { value: 0 };

const cookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IncrementPayload>) => {
      const { grannyHandsIsActive } = action.payload;
      if (grannyHandsIsActive) {
        state.value += 2;
      } else {
        state.value++;
      }
    },
    incrementByOne: (state) => {
      state.value++;
    },
  },
  extraReducers(builder) {
    builder.addCase(buy, (state, action: PayloadAction<{ id: number; price: number }>) => {
      state.value -= action.payload.price;
    });
  },
});

export const incrementValueInfinitely = (interval: number) => (dispatch: Dispatch) => {
  setInterval(() => {
    dispatch(cookieSlice.actions.incrementByOne());
  }, interval);
};

export const { increment } = cookieSlice.actions;
export default cookieSlice.reducer;
