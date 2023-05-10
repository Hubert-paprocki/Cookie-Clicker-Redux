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
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, incrementByAmount } = cookieSlice.actions
export default cookieSlice.reducer