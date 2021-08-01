import React from "react";
import {
  Heading,
  Flex,
  Button,
  Input,
  FormLabel,
  FormControl,
  Select,
} from "@chakra-ui/react";


const Search = () => {
  return (
    <form>
    <Flex align="center" justify="space-between" wrap="wrap" w="100%" p={4}>
      <Heading mb={10}>Search for a quiet place in Sydney</Heading>
      <FormControl id="postcode" isRequired>
        <FormLabel>Suburb</FormLabel>
        <Input id="autocomplete" placeholder="suburb" />
      </FormControl>
      <FormControl id="place" mt={5}>
        <FormLabel>Type of place</FormLabel>
        <Select placeholder="Select type of place">
          <option>Restaurant</option>
          <option>Bar</option>
          <option>Pub</option>
        </Select>
      </FormControl>
      <FormControl isRequired id="rating" mt={5}>
        <FormLabel>Rating</FormLabel>
        <Select placeholder="How loud?">
          <option>Quiet</option>
          <option>Average</option>
          <option>Bit Loud</option>
          <option>Loud</option>
          <option>Very Loud</option>
          <option>Very Very Loud</option>
        </Select>
      </FormControl>
      <Button  type="submit" variant={"solid"} colorScheme={"teal"} size={"md"} mt={5}>
        Submit
      </Button>
    </Flex>
    </form>
  );
};

export default Search;
