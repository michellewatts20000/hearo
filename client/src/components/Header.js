import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Auth from "../utils/auth.js";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <>
      <Box mb={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            variant={"hamburger"}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            as={"nav"}
            display={{ base: "none", md: "flex" }}
          >
            <Link variant="highlight" href="/">
              Home
            </Link>
              <Link variant="highlight" href="/about">
              About
            </Link>
            <Link variant="highlight" href="/search">
              Search
            </Link>
          </HStack>

          <Flex alignItems={"center"}>
            {Auth.loggedIn() ? (
              <>
                <Link href="/me" variant={"solid"} mr={4}>
                  Your Profile
                </Link>
                <Link onClick={logout}>
                  <Button variant="primary" size={"sm"}>
                    Logout
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link href="/signup">
                  <Button variant="primary" size={"sm"} ml={4}>
                    Signup
                  </Button>
                </Link>
              </>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link variant="highlight" href="/">
                Home
              </Link>
              <Link variant="highlight" href="/about">
                About
              </Link>
              <Link variant="highlight" href="/search">
                Search
              </Link>
              
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
