import {
  Stack,
  Image,
  HStack,
  Avatar,
  Text,
  VStack,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";

function PostCard() {
  return (
    <Flex justify="center" align="center" my={5}>
      <Stack width="320px" height="450px" boxShadow="md" borderRadius="xl">
        <Image src="/img.jpg" alt="img"></Image>
        <Stack p="4">
          <HStack>
            <Avatar size="sm" />
            <Text fontWeight="600">Sayyed Arbaab</Text>
            <Text fontSize="xs">1 min ago</Text>
          </HStack>
          <VStack align="flex-start">
            <Heading fontSize="lg">Subscribe to my chennel</Heading>
            <Text fontSize="sm">
              Hello,Guys welcome to the Chakra Ui Component Based Web
              Application.
            </Text>
            <Text fontSize="sm">
              Hello,Guys welcome to the Chakra Ui Component Based Web App.
            </Text>
            <Button alignSelf="flex-end" size="sm">
              View Post
            </Button>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default PostCard;
