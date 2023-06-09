import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { buyBooster } from './actions';

export interface Booster {
  id: number;
  price: number;
  time?: number;
  isActive: boolean;
  cookieVal: number;
  flashRed: boolean;
}

interface BoostersState {
  boosters: Booster[];
}

const initialState: BoostersState = {
  boosters: [
    {
      id: 0,
      price: 40,
      isActive: false,
      cookieVal: 2,
      flashRed: false,
    },
    {
      id: 1,
      time: 2000,
      price: 50,
      isActive: false,
      cookieVal: 1,
      flashRed: false,
    },
    {
      id: 2,
      time: 1000,
      price: 100,
      isActive: false,
      cookieVal: 1,
      flashRed: false,
    },
    {
      id: 3,
      time: 1000,
      price: 150,
      isActive: false,
      cookieVal: 2,
      flashRed: false,
    },
    {
      id: 4,
      time: 2000,
      price: 250,
      isActive: false,
      cookieVal: 10,
      flashRed: false,
    },
  ],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    activateBooster: (state, action: PayloadAction<number>): void => {
      const boosterId = action.payload;
      const booster = state.boosters.find((b) => b.id === boosterId);
      if (booster) {
        booster.isActive = true;
      }
    },
    setFlashRed: (state, action: PayloadAction<{ id: number; value: boolean }>): void => {
      const { id, value } = action.payload;
      const booster = state.boosters.find((b) => b.id === id);
      if (booster) {
        booster.flashRed = value;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyBooster, (state, action: PayloadAction<{ id: number; price: number }>): void => {
      const { id } = action.payload;
      const booster = state.boosters.find((b) => b.id === id);
      if (booster && !booster.isActive) {
        booster.isActive = true;
      }
    });
  },
});

export const { activateBooster, setFlashRed } = shopSlice.actions;
export default shopSlice.reducer;
