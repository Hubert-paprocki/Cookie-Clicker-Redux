import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  value: "game"|"shop"
}

const initialState = { value: "game" } as AppState

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<string>) {
      state.value = action.payload as AppState["value"];
    },
  },
})

export const { changePage } = appSlice.actions
export default appSlice.reducer
