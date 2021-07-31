import React from 'react';
import { Flex, Heading, Button, Link, Box, Stack, Center, Text} from '@chakra-ui/react';
import { FaWaveSquare } from 'react-icons/fa';

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
          textAlign={["center", "center", "left", "left"]}
        >
          HearO
        </Heading>
       
        <Text
          as="h2"
          size="md"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
      Find quiet restaurants, bars and pubs in Sydney. 
        </Text>
        <Center>
          <Link href="/search">
              <Button
              colorScheme="teal"
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

      <Box w={{ base: "30%", sm: "30%", md: "30%" }}  mb={{ base: 12, md: 0 }}>
       <FaWaveSquare size={300}/>

      </Box>
    </Flex>
  );
}






export default Home;