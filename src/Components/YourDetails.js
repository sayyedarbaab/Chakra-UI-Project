import React from "react";
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

function YourDetails() {
  return (
    <VStack w="full" h="full" p={10} spacing={10} align={"flex-start"}>
      <VStack spacing={2} align="flex-start">
        <Heading>Your Details</Heading>
        <Text>If you already have an account click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Enter your name"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Enter your name"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea placeholder="Enter your address"></Textarea>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Textarea placeholder="Enter your City"></Textarea>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select Country">
              <option value="india"></option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox>Ship To the Billing address</Checkbox>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button width="full" size="lg">
            Place Items
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}

export default YourDetails;
