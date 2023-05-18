import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BoostersState {
  selectedItems: string[];
}

const initialState: BoostersState = {
  selectedItems: [],
};

const boostersSlice = createSlice({
  name: 'boosters',
  initialState,
  reducers: {
    buyItem: (state, action: PayloadAction<string>) => {
      state.selectedItems.push(action.payload);
    },
  },
});

export const { buyItem } = boostersSlice.actions;
export default boostersSlice.reducer;
