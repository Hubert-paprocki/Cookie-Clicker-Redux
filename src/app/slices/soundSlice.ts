import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SoundState = string;
const initialState: SoundState = "";


export const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {}
});

// export const {  } = soundSlice.actions;

export default soundSlice.reducer;
