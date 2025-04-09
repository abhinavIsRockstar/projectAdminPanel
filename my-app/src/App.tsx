import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box flex="1" p={6}>
        <Dashboard />
      </Box>
    </Flex>
  );
};

export default App;
