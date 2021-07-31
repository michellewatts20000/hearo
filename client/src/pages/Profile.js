import React from "react";
import {
  Heading,
  FormLabel,
  FormControl,
  Input,
  Select,
  Button,
  Text,
  Textarea,
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
    <>
      <Text mb={10}>
        Welcome {Auth.getProfile().data.username}, to your account.
      </Text>
      <Heading mb={10}>Rate a place based on how loud it was</Heading>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Name" />
      </FormControl>
      <FormControl mt={5} id="suburb" isRequired>
        <FormLabel>Suburb</FormLabel>
        <Input placeholder="Suburb" />
      </FormControl>
      <FormControl isRequired id="place" mt={5}>
        <FormLabel>Type of place</FormLabel>
        <Select placeholder="Select type of place">
          <option>Restaurant</option>
          <option>Bar</option>
          <option>Pub</option>
        </Select>
      </FormControl>
      <FormControl isRequired id="rating" mt={5}>
        <FormLabel>Rating</FormLabel>
        <Select placeholder="How loud is it?">
          <option>Quiet</option>
          <option>Average</option>
          <option>Bit Loud</option>
          <option>Loud</option>
          <option>Very Loud</option>
          <option>Very Very Loud</option>
        </Select>
      </FormControl>
      <FormControl mt={5} id="comment">
        <FormLabel>Comment</FormLabel>
        <Textarea placeholder="Comment" />
      </FormControl>
      <Button
        variant={"solid"}
        colorScheme={"teal"}
        size={"md"}
        mt={5}
        type="submit"
      >
        Submit
      </Button>

      <Heading mb={10}>Your entries</Heading>
    </>
  );
};

export default Profile;
