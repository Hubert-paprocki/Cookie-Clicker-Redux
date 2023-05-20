import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { buyBooster } from './actions';

const initialState = {
  boosters: [
    {
      id: 0,
      name: 'Granny Hands',
      desc: 'Earns two cookies with one click',
      price: 40,
      isActive: false,
    },
    {
      id: 1,
      name: 'One Worker',
      desc: 'Makes one cookie per 2s',
      time:2000,
      price: 50,
      isActive: false,
    },
    {
      id: 2,
      name: 'Two Workers',
      desc: 'Makes one cookie per 1s',
      time:1000,
      price: 100,
      isActive: false,
    },
    {
      id: 3,
      name: 'Worker Squad',
      desc: 'Makes two cookies per 1s',
      time:500,
      price: 150,
      isActive: false,
    },
    {
      id: 4,
      name: 'Cookie Factory',
      desc: 'Makes ten cookies per 1s',
      time:100,
      price: 250,
      isActive: false,
    },
  ],
};

const boosterSlice = createSlice({
  name: 'booster',
  initialState,
  reducers: {
    activateBooster: (state, action: PayloadAction<number>) => {
      const boosterId = action.payload;
      const booster = state.boosters.find((b) => b.id === boosterId);
      if (booster) {
        booster.isActive = true;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(buyBooster, (state, action: PayloadAction<{ id: number; price: number }>) => {
      const boosterId = action.payload.id;
      const booster = state.boosters.find((b) => b.id === boosterId);
      if (booster) {
        if (!booster.isActive) {
          booster.isActive = true;
        }
      }
    });
  },
});

export const { activateBooster } = boosterSlice.actions;
export default boosterSlice.reducer;
