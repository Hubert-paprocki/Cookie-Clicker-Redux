// shopSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ShopState {
  selectedItems: string[];
}

const initialState: ShopState = {
  selectedItems: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    buyItem: (state, action: PayloadAction<string>) => {
      state.selectedItems.push(action.payload);
    },
  },
});

export const { buyItem } = shopSlice.actions;
export default shopSlice.reducer;
