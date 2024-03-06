import React from "react";
import { ChakraProvider, Flex, Container } from "@chakra-ui/react";
import YourDetails from "./Components/YourDetails";
import Cart from "./Components/Cart";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg" p="10">
        <Flex
          h={{ base: "auto", md: "100vh" }}
          py={[0, 10, 20]}
          direction={{ base: "column-reverse", md:"row"}}
        >
          <YourDetails />
          <Cart />
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
