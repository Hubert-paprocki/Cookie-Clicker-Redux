import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  modal: number;
}

const initialState: ModalState = { modal: 1 };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModal: (state, action: PayloadAction<number>) => {
      state.modal = action.payload;
    },
  },
});

export const { changeModal } = modalSlice.actions;
export default modalSlice.reducer;
