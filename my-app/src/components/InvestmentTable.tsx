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
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { useAppSelector, useAppDispatch } from "../../src/store/hooks.ts";
import {
  reorderInvestments,
  addInvestment,
} from "../features/investment/investmentSlice";
import { useEffect } from "react";

const InvestmentTable = () => {
//   const { data } = useGetInvestmentsQuery();
  const dispatch = useAppDispatch();
  // const { investments,} = useAppSelector(
  //     (state) => state.investment
  //   );

//   useEffect(() => {
//     if (data) {
//       dispatch(addInvestment(data));
//     }

//     //   return () => {
//     //     second
//     //   }
//   }, [data]);

  const data = useAppSelector((state) => state.investment.investments);
  console.log(data, "investments");
  const isLoading = useAppSelector((state) => state.investment.isLoading);
  const isError = useAppSelector((state) => state.investment.isError);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reordered = Array.from(data);
    const [moved] = reordered.splice(result.source.index, 1);

    console.log(
      data,
      moved,
      reordered,
      //   result,
      "investments_reordered_moved_result"
    );
    debugger;
    reordered.splice(result.destination.index, 0, moved);
    debugger;
    dispatch(reorderInvestments(reordered));
  };

  if (isLoading)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (isError) return <Text color="red.500">Failed to load investments.</Text>;

  return (
    <Box overflowX="auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="investments">
          {(provided) => (
            <Table
              size="md"
              variant="simple"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Amount</Th>
                  <Th>ROI</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((inv, index) => (
                  <Draggable
                    key={inv.id.toString()}
                    draggableId={inv.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <Tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Td>{inv.name}</Td>
                        <Td>${inv.amount.toLocaleString()}</Td>
                        <Td>{inv.roi}</Td>
                      </Tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Tbody>
            </Table>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default InvestmentTable;
