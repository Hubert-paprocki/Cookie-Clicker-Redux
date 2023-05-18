import { createAction } from '@reduxjs/toolkit';

export const buy = createAction<{ id: number; price: number }>('app/buy');
