import {
  Container,
  Heading,
  Stack,
  Image,
  HStack,
  Text,
  Avatar,
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";
import React from "react";

function PostPage() {
  return (
    <Container maxW="container.xl">
      <Stack spacing={2} mt={8} mb={8}>
        <Heading
          fontSize="xl"
          textTransform="capitalize"
          mb={5}
          textAlign="center"
        >
          Hello Sayyed Here
        </Heading>
        <Image src="/img.jpg" />
        <HStack>
        <Avatar src="./imgB.png" size="lg"/>
          <Text fontWeight="600">Sayyed Arbaab</Text>
          <Text fontSize="xs">1 min ago</Text>
        </HStack>
        <Text>
          I have been working on programming language from starting my
          graduation and I gain many skill after completing my graduation, I
          learned Full Stack Web Development but I m Passionate about front-end
          development and I have hands-on experience to build a web app so, I am
          interested to work as a front-end web developer to build applications.
          I have been working on programming language from starting my
          graduation and I gain many skill after completing my graduation, I
          learned Full Stack Web Development but I m Passionate about front-end
          development and I have hands-on experience to build a web app so, I am
          interested to work as a front-end web developer to build applications.
          I have been working on programming language from starting my
          graduation and I gain many skill after completing my graduation, I
          learned Full Stack Web Development but I m Passionate about front-end
          development and I have hands-on experience to build a web app so, I am
          interested to work as a front-end web developer to build applications.
          I have been working on programming language from starting my
          graduation and I gain many skill after completing my graduation, I
          learned Full Stack Web Development but I m Passionate about front-end
          development and I have hands-on experience to build a web app so, I am
          interested to work as a front-end web developer to build applications.
          I have been working on programming language from starting my
          graduation and I gain many skill after completing my graduation, I
          learned Full Stack Web Development but I m Passionate about front-end
          development and I have hands-on experience to build a web app so, I am
          interested to work as a front-end web developer to build applications.
          I have been working on programming language from starting my
          graduation and I gain many skill after completing my graduation, I
          learned Full Stack Web Development but I m Passionate about front-end
          development and I have hands-on experience to build a web app so, I am
          interested to work as a front-end web developer to build applications.
        </Text>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. I have been working on
              programming language from starting my graduation and I gain many
              skill after completing my graduation, I learned Full Stack Web
              Development but I m Passionate about front-end development and I
              have hands-on experience to build a web app so, I am interested to
              work as a front-end web developer to build applications. I have
              been working on programming language from starting my graduation
              and I gain many skill after completing my graduation, I learned
              Full Stack Web Development but I m Passionate about front-end
              development and I have hands-on experience to build a web app so,
              I am interested to work as a front-end web developer to build
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. I have been working on
              programming language from starting my graduation and I gain many
              skill after completing my graduation, I learned Full Stack Web
              Development but I m Passionate about front-end development and I
              have hands-on experience to build a web app so, I am interested to
              work as a front-end web developer to build applications. I have
              been working on programming language from starting my graduation
              and I gain many skill after completing my graduation, I learned
              Full Stack Web Development but I m Passionate about front-end
              development and I have hands-on experience to build a web app so,
              I am interested to work as a front-end web developer to build
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Container>
  );
}

export default PostPage;
