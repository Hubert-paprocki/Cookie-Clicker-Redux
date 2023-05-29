import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavigationState {
  link: "game" | "shop" | "scoreboard";
}

const initialState: NavigationState = { link: "game" };

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<"game" | "shop" | "scoreboard">) => {
      state.link = action.payload;
    },
  },
});

export const { changePage } = navigationSlice.actions;
export default navigationSlice.reducer;
