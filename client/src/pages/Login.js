import React from 'react';
import { Heading, Flex, FormControl, FormLabel, Button, Input } from '@chakra-ui/react';

const Login = () => {

    return (

<Flex align="center" justify="space-between" wrap="wrap" w="100%" p={4}>



<Heading mb={10}>Login</Heading>
       <FormControl id="email" isRequired>
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
              Submit
            </Button>

</Flex>


    );

};




export default Login;