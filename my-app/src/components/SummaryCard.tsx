// src/components/SummaryCard.tsx
import { Box, Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react";
import { investments } from "../mock/investments";

const SummaryCard = () => {
  const totalInvestment = investments.reduce((sum, i) => sum + i.amount, 0);
  const averageROI =
    investments.reduce((sum, i) => sum + i.roi, 0) / investments.length;

  return (
    <Box p={4} mb={6} bg="white" borderRadius="md" boxShadow="md">
      <StatGroup>
        <Stat>
          <StatLabel>Total Investment</StatLabel>
          <StatNumber>${totalInvestment.toLocaleString()}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Average ROI</StatLabel>
          <StatNumber>{averageROI.toFixed(2)}%</StatNumber>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default SummaryCard;
