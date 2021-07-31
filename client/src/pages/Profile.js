import React from "react";
import {
  Heading,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Select,
  Button,
  Text,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex align="center" justify="space-between" wrap="wrap" w="100%" p={4}>
      <Text>Welcome X, to your account.</Text>
      <Heading mb={10}>Rate a place based on how loud it was</Heading>
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
      <Button variant={"solid"} colorScheme={"teal"} size={"md"} mt={5}>
        Submit
      </Button>
    </Flex>
  );
};

export default Profile;
