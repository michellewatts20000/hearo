import React from 'react';
import { Heading, Flex, Button, Input, FormLabel, FormControl, Select } from '@chakra-ui/react';

const Search = () => {

    return (

<Flex align="center" justify="space-between" wrap="wrap" w="100%" p={4}>

<Heading mb={10}>Search for a place</Heading>
       <FormControl id="postcode" isRequired>
  <FormLabel>Suburb</FormLabel>
  <Input placeholder="suburb" />
</FormControl>
<FormControl id="place" mt={5}>
  <FormLabel>Type of place</FormLabel>
  <Select placeholder="Select type of place">
    <option>Restaurant</option>
    <option>Bar</option>
    <option>Pub</option>
  </Select>
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




export default Search;