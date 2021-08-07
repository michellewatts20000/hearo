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
      mb={10}
    >
      <Stack
        w={{ base: "70%", sm: "70%", md: "70%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
        variant="hero"   
        fontSize={{ base: "50px", md: "80px", lg: "125px" }}
          textAlign={["center", "center", "left", "left"]}
        >
          HEARO
        </Heading>

        <Text
          size={"lg"}
          fontSize={{ base: "18px", md: "20px", lg: "25px" }}
          opacity="0.8"
          fontWeight="normal"
         
          textAlign={["center", "center", "left", "left"]}
        >
          Find quiet places to socialise in Sydney.
        </Text>
        <Center>
          <Link href="/search">
            <Button
            mt={5}
              variant="primary"
              type="submit"
            >
              Search
            </Button>
          </Link>
        </Center>
      </Stack>

      <Box w={{ base: "40%", sm: "40%", md: "40%" }} mb={{ base: 12, md: 0 }}>
        <FaWaveSquare color={"#81e6d9"} size={{ base: 200 }} />
      </Box>
    </Flex>
  );
};

export default Home;
