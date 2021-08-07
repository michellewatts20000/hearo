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
import Auth from "../../utils/auth";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = ['Home', 'Search'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    href={children}>
    {children}
  </Link>
);


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
            <HStack spacing={8} alignItems={'center'}
              as={'nav'}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
      
          <Flex alignItems={"center"}>
            {Auth.loggedIn() ? (
              <>
                <Link
                  href="/me"
                  variant={"solid"}
                  colorScheme={"teal"}
                  size={"sm"}
                  mr={4}
                >
                  Your Profile
                </Link>
                <Link onClick={logout}>
                  <Button
                    variant="primary"
                    size={"sm"}
                    mr={4}
                  >
                    Logout
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  variant={"solid"}
                  colorScheme={"teal"}
                  size={"sm"}
                  mr={4}
                >
                  Login
                </Link>
                <Link href="/signup">
                  <Button
                   variant="primary"
                    size={"sm"}
                    mr={4}
                  >
                    Signup
                  </Button>
                </Link>
              </>
            )}
          
          </Flex>
        </Flex>

       {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
