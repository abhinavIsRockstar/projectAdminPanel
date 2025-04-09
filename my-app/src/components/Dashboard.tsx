// src/components/Dashboard.tsx (or a new page)
import { Heading,Box } from '@chakra-ui/react';
import InvestmentTable from './InvestmentTable';
import AddInvestmentForm from './AddInvestmentForm';

const Dashboard = () => (
  <>
  <Box>
    <Heading mb={4}>Investments</Heading>
    <AddInvestmentForm />
    <InvestmentTable />
    </Box>
  </>
);

export default Dashboard;
