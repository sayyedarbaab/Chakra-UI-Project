import { Avatar, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Drawer } from "@chakra-ui/react";
import { DrawerOverlay } from "@chakra-ui/react";
import { DrawerContent } from "@chakra-ui/react";
import { DrawerCloseButton } from "@chakra-ui/react";
import { DrawerHeader } from "@chakra-ui/react";
import { DrawerBody } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { DrawerFooter } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";
import { MenuButton } from "@chakra-ui/react";
import { MenuList } from "@chakra-ui/react";
import { MenuItem } from "@chakra-ui/react";

function Navi() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Flex
        h="75px"
        bg="brand.100"
        justify="space-between"
        align="center"
        px={4}
      >
        <IconButton
          onClick={onOpen}
          ref={btnRef}
          fontSize="2xl"
          variant="ghost"
        >
          <FaBars />
        </IconButton>
        <Menu>
          <MenuButton>
            <Avatar />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Setting</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}

export default Navi;
