// src/components/ROIChart.tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { Box, Text } from "@chakra-ui/react";
import { roiData } from "../mock/roiData";

const ROIChart = () => {
  return (
    <Box p={4} bg="white" borderRadius="md" boxShadow="md">
      <Text fontSize="lg" mb={4} fontWeight="bold">ROI Trends Over Time</Text>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={roiData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="roi" stroke="#3182ce" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ROIChart;
