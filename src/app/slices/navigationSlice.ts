import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface NavigationState {
  value: "game"|"shop"|"scoreboard"
}

const initialState = { value: "game" } as NavigationState

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<string>) {
      state.value = action.payload as NavigationState["value"];
    },
  },
})

export const { changePage } = navigationSlice.actions
export default navigationSlice.reducer
