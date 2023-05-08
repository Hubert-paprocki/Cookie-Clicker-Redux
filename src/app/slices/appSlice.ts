import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SoundState = string;
const initialState: SoundState = "{}";

export const appSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {}
});


// export const {  } = appSlice.actions;

export default appSlice.reducer;
