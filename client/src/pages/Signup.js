import React from 'react';
import { Heading, Flex, Input, FormControl, FormLabel, Button } from '@chakra-ui/react';

const Signup = () => {

    return (
<Flex align="center" justify="space-between" wrap="wrap" w="100%" p={4}>

<Heading mb={10}>Create an account</Heading>
       <FormControl id="name" isRequired>
  <FormLabel>Name</FormLabel>
  <Input placeholder="name" />
</FormControl>

       <FormControl mt={5} id="email" isRequired>
  <FormLabel>Email</FormLabel>
  <Input placeholder="email" />
</FormControl>
     <FormControl mt={5} id="password" isRequired>
  <FormLabel>Password</FormLabel>
  <Input placeholder="password" />
</FormControl>


 <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'md'}
              mt={5}>
              Signup
            </Button>

</Flex>


    );

};




export default Signup;