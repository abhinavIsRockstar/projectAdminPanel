import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Investment {
  id: string;
  name: string;
  amount: number;
  roi: number;
}

export const InvestmentApi = createApi({
  reducerPath: 'InvestmentApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // Mock base
  endpoints: (builder) => ({
    getInvestments: builder.query<Investment[], void>({
      queryFn: async () => {
        // Simulate API delay
        await new Promise((res) => setTimeout(res, 500));
        return {
          data: [
            { id: '1', name: 'Real Estate', amount: 10000, roi: 8 },
            { id: '2', name: 'Stocks', amount: 5000, roi: 12 },
            { id: '3', name: 'Mutual Funds', amount: 7500, roi: 9 },
          ],
        };
      },
    }),
  }),
});

export const { useGetInvestmentsQuery } = InvestmentApi;
