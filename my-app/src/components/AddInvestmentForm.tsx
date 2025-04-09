import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  NumberInput,
  NumberInputField,
  VStack,
} from "@chakra-ui/react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface InvestmentFormValues {
  name: string;
  amount: number;
  document: FileList;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than 0")
    .required("Amount is required"),
  document: yup
    .mixed()
    .test("fileRequired", "Document is required", (value) => value?.length > 0),
});

const AddInvestmentForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InvestmentFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: InvestmentFormValues) => {
    console.log("Form submitted:", data);
    // You can mock an API call here
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} maxW="md" mx="auto">
      <VStack spacing={4} align="stretch">
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register("name")} placeholder="Investment Name" />
          <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.amount}>
          <FormLabel>Amount</FormLabel>
          <Controller
            control={control}
            name="amount"
            render={({ field }) => (
              <NumberInput {...field} min={0}>
                <NumberInputField />
              </NumberInput>
            )}
          />
          <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.document}>
          <FormLabel>Upload Document</FormLabel>
          <Input type="file" {...register("document")} />
          <FormErrorMessage>{errors.document?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="teal">
          Add Investment
        </Button>
      </VStack>
    </Box>
  );
};

export default AddInvestmentForm;
