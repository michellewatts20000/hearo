import React from "react";
import {
  Flex,
  Heading,
  Button,
  Link,
  Box,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react";
import { FaWaveSquare } from "react-icons/fa";

const Home = () => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="65vh"
      px={6}
      mb={16}
    >
      <Stack
        spacing={4}
        w={{ base: "60%", sm: "60%", md: "60%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          size={"4xl"}
          fontSize="100"
          textAlign={["center", "center", "left", "left"]}
        >
          HEARO
        </Heading>

        <Text
          size={"lg"}
          fontSize="25"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          Find quiet places to socialise in Sydney.
        </Text>
        <Center>
          <Link href="/search">
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"md"}
              mt={5}
              type="submit"
            >
              Search
            </Button>
          </Link>
        </Center>
      </Stack>

      <Box w={{ base: "40%", sm: "40%", md: "40%" }} mb={{ base: 12, md: 0 }}>
        <FaWaveSquare color={"teal"} size={{ base: 200 }} />
      </Box>
    </Flex>
  );
};

export default Home;
