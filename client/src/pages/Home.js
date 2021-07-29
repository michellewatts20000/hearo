import React from 'react';
import { Flex, Heading, Button, Link, Box, Stack, Center, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

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
        w={{ base: "80%", md: "70%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size={"3xl"}
          fontWeight="bold"
          textAlign={["center", "center", "left", "left"]}
        >
          HEARO
        </Heading>
       
        <Heading
          as="h2"
          size="md"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
      Find quiet restaurants, bars and pubs in Sydney. 
        </Heading>
        <Center>
          <Link>
              <Button
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"
                mr="3"
              >
        Signup
              </Button>

          </Link>
          <Link>
              <Button
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"
              >
          Signin
              </Button>

          </Link>
        </Center>
      </Stack>

      <Box w={{ base: "70%", sm: "50%", md: "40%" }} mb={{ base: 12, md: 0 }}>
       <FormControl id="first-name" isRequired>
  <FormLabel>Sydney postcode</FormLabel>
  <Input placeholder="postcode" />
</FormControl>
<FormControl id="place">
  <FormLabel>Type of place</FormLabel>
  <Select placeholder="Select type of place">
    <option>Restaurant</option>
    <option>Bar</option>
    <option>Pub</option>
  </Select>
</FormControl>
      </Box>
    </Flex>
  );
}






export default Home;