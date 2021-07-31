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
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <Text>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </Text>
    );
  }

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
