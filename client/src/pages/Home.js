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
// import { FaWaveSquare, FaWave } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { motion } from "framer-motion";

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
        w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          variant="hero"
          fontSize={{
            base: "70px",
            sm: "70px",
            md: "70px",
            lg: "115px",
            xl: "135px",
          }}
          
          textAlign={["center", "center", "left", "left"]}
        >
          HEARO
        </Heading>

        <Text
          size={"lg"}
          fontSize={{ base: "24px", md: "24px", lg: "35px" }}
          fontWeight="normal"
          textAlign={["center", "center", "left", "left"]}
          opacity="0.8"
        >
          Find quiet bars, restaurants and cafes in Sydney.
        </Text>
        <Center>
          <Link href="/search">
            <Button mt={5} variant="primary" type="submit">
              Search
            </Button>
          </Link>
        </Center>
      </Stack>

      <Box
        w={{ base: "60%", sm: "40%", md: "50%", lg: "50%" }}
        mb={{ base: 5, md: 0 }}
      >
        <Center>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 10,
            }}
          >
            <Box
              mt={{ base: "0px", md: "20px", lg: "20px", xl: "20px" }}
              fontSize={{
                base: "150px",
                md: "250px",
                lg: "310px",
                xl: "400px",
              }}
              color="secondary"
             
            >
              <GiSoundWaves   />
            </Box>
          </motion.div>
        </Center>
      </Box>
    </Flex>
  );
};

export default Home;
