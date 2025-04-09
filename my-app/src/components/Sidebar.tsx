import { Box, VStack, Text } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box w="250px" bg="gray.800" color="white" p={4}>
      <Text fontSize="xl" mb={4}>Investment App</Text>
      <VStack letterSpacing={4} align="stretch">
        <Text _hover={{ cursor: 'pointer', bg: 'gray.700' }} p={2} rounded="md">Dashboard</Text>
        <Text _hover={{ cursor: 'pointer', bg: 'gray.700' }} p={2} rounded="md">Add Investment</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;
