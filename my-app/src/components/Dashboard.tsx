// src/components/Dashboard.tsx
import { Heading, Box } from '@chakra-ui/react';
import InvestmentTable from './InvestmentTable';
import AddInvestmentForm from './AddInvestmentForm';
import ROIChart from './ROIChart';
import SummaryCard from './SummaryCard';
import { useTranslation } from 'react-i18next';
// import { useGetInvestmentsQuery } from '../services/InvestmentApi';
// import { useEffect } from 'react';
// import { setInvestments } from '../features/investment/investmentSlice';
// import { useAppDispatch } from '../store/hooks';

const Dashboard = () => {
  const { t } = useTranslation();
  // const dispatch = useAppDispatch()
  // const { data,  } = useGetInvestmentsQuery();
  // useEffect(() => {
  //   if (data) {
  //     dispatch(setInvestments(data)); // Dispatch to Redux
  //   }
  // }, [data, dispatch]);
  return (
    <Box>
      <Heading mb={4}>{t('dashboard.investmentsHeading')}</Heading>
      <AddInvestmentForm />
      <SummaryCard />
      <ROIChart />
      <InvestmentTable />
    </Box>
  );
};

export default Dashboard;
