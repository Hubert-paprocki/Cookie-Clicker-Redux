import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CookieState {
  value: number
}

const initialState = { value: 0 } as CookieState

const cookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
  },
})

export const { increment } = cookieSlice.actions
export default cookieSlice.reducer