import React from 'react';
import { Flex, Heading, Button, Link, Box, Stack, Center} from '@chakra-ui/react';
import { FaFileAudio } from 'react-icons/fa';

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
          <Link href="/search">
              <Button
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"
                mr="3"
              >
        Search
              </Button>

          </Link>
    
        </Center>
      </Stack>

      <Box w={{ base: "30%", sm: "30%", md: "30%" }} mb={{ base: 12, md: 0 }}>
       <FaFileAudio  size="sm"/>

      </Box>
    </Flex>
  );
}






export default Home;