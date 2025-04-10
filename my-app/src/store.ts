import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { InvestmentApi } from './services/InvestmentApi';
import investmentReducer from "./features/investment/investmentSlice"

export const store = configureStore({
  reducer: {
    [InvestmentApi.reducerPath]: InvestmentApi.reducer,
    // other reducers here
    investment: investmentReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(InvestmentApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
