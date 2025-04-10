// src/services/investmentSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Investment } from '../../../src/types/InvestmentType';

interface InvestmentState {
  investments: Investment[];
  isLoading : boolean,
  isError : boolean
}

const initialState: InvestmentState = {
  investments: [
    { id: 1, name: 'Real Estate', amount: 10000, roi: 8 },
    { id: 2, name: 'Stocks', amount: 15000, roi: 12 },
    { id: 3, name: 'Mutual Funds', amount: 8000, roi: 6 },
  ],
  isLoading : false,
  isError : false
};

const investmentSlice = createSlice({
  name: 'investment',
  initialState,
  reducers: {
    reorderInvestments: (state, action: PayloadAction<Investment[]>) => {
      state.investments = action.payload;
    },
    addInvestment: (state, action: PayloadAction<Investment>) => {
      state.investments.push(action.payload);
    },
  },
});

export const { reorderInvestments, addInvestment } = investmentSlice.actions;
export default investmentSlice.reducer;
