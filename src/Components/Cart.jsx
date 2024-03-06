import React from "react";
import {
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Cart() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const textColor = useColorModeValue("gray.600", "whiteAlpha.600");
  return (
    <VStack
      bg={bgColor}
      w="full"
      h="610px"
      p={10}
      spacing={6}
      align={"flex-start"}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your Cart</Heading>
        <Text>If the price is to hard on Your eyes, </Text>
        <Button onClick={toggleColorMode} variant="outline" colorScheme="black">
          Try changing the theme
        </Button>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="" alt="lg" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny Board</Heading>
            <Text color={textColor}>PNSSBSGDSS221</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={textColor}>Subtotal</Text>
          <Heading size="sm">$119</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>Shipping</Text>
          <Heading size="sm">$119</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>Taxes (Estimated)</Text>
          <Heading size="sm">$119</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color={textColor}>Total</Text>
          <Heading size="lg">$162.78</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default Cart;
