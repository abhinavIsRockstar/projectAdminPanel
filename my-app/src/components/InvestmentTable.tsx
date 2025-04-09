import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Spinner,
    Box,
    Text,
    Center,
  } from "@chakra-ui/react";
  
  import { useGetInvestmentsQuery } from "../services/InvestmentApi";
  
  const InvestmentTable = () => {
    const { data, isLoading, isError } = useGetInvestmentsQuery();
  
    if (isLoading)
      return (
        <Center>
          <Spinner />
        </Center>
      );
  
    if (isError)
      return <Text color="red.500">Failed to load investments.</Text>;
  
    return (
      <Box overflowX="auto">
        <Table size="md" variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Amount</Th>
              <Th>ROI</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((inv) => (
              <Tr key={inv.id}>
                <Td>{inv.name}</Td>
                <Td>${inv.amount.toLocaleString()}</Td>
                <Td>{inv.roi}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  };
  
  export default InvestmentTable;
  