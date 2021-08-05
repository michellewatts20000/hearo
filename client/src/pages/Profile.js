import React from "react";
import {
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Stack,
} from "@chakra-ui/react";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import PlaceForm from "../components/PlaceForm";
import MyReviews from "../components/MyReviews";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  console.log("user", user);
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>You need to be logged in to see this. </AlertTitle>
        <AlertDescription>
          Use the navigation links above to sign up or log in!
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <>
      <Stack direction={["column", "row"]} spacing="24px">
        <Box w={["100%", "50%"]} mr="20">
          <Heading mb={5}>Hi {Auth.getProfile().data.username}!</Heading>
          <PlaceForm />
        </Box>
        <Box>
          <Heading as="h3" color="#7FE6D1" size="md" mt={10} mb={3}>
            Your reviews.
          </Heading>
          <MyReviews user={user} />
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
