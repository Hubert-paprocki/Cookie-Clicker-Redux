import { createAction } from '@reduxjs/toolkit';

export const increment = createAction<{ grannyHandsIsActive: boolean }>('cookie/increment');
export const boosterIncrement = createAction<{ cookieVal: number; interval: number }>('cookie/boosterIncrement');
export const buyBooster = createAction<{ id: number; price: number; name: string }>('cookie/buyBooster');
