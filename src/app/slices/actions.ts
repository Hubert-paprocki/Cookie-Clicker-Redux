import { createAction } from '@reduxjs/toolkit';

export const buyBooster = createAction<{ id: number; price: number,name:string }>('app/buy');


