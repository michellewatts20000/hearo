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
import { motion } from "framer-motion"

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
        w={{ base: "100%", sm: "100%", md: "70%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          variant="hero"
          fontSize={{ base: "70px", md: "80px", lg: "135px" }}
          textAlign={["center", "center", "left", "left"]}
        >
          HEARO
        </Heading>

        <Text
          size={"lg"}
          fontSize={{ base: "24px", md: "24px", lg: "25px" }}
          opacity="0.8"
          fontWeight="normal"
          textAlign={["center", "center", "left", "left"]}
        >
          Find quiet places to socialise in Sydney.
        </Text>
        <Center>
          <Link href="/search">
            <Button mt={5} variant="primary" type="submit">
              Search
            </Button>
          </Link>
        </Center>
      </Stack>

      <Box w={{ base: "60%", sm: "40%", md: "40%" }} mb={{ base: 5, md: 0 }}>
        <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
        <FaWaveSquare color={"#81e6d9"} size={{ base: 200 }} />
         </motion.div>
      </Box>
    </Flex>
  );
};

export default Home;
