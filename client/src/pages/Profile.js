import React from "react";
import {
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Stack,
  Spinner,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { useParams } from "react-router-dom";
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
    return (
      <>
      
        <Stack direction={["column", "column", "column", "row"]} spacing="24px">
          <Box w={["100%", "100%", "100%", "40%"]} mr="10">
            <Heading mb={5}>Hi {Auth.getProfile().data.username}! </Heading>
            <Text mb={5} variant="h3">
              Add a loudness review below:
            </Text>
            <PlaceForm />
          </Box>

          <Box w={["100%", "100%", "100%", "60%"]}>
            <Text mb={5} variant="h3">
              Your reviews.
            </Text>

            <SimpleGrid columns={[1, 1, 3, 3]} spacing="40px">
              <MyReviews user={user} />
            </SimpleGrid>
          </Box>
        </Stack>
      </>
    );
  }

  if (loading) {
    return <Spinner color="primary" />;
  }

  if (!user?.username) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>You need to be logged in to see this. </AlertTitle>
        <AlertDescription>
          Use the navigation links above to signup or login!
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <>
      <Stack direction={["column", "column", "row", "row"]} spacing="24px">
        <Box w={["100%", "100%", "100%", "40%"]} mr="10">
          <Heading mb={5}>Hi {Auth.getProfile().data.username}! </Heading>
          <Text mb={5} variant={"lowkey"}>
            Add a loudness review below:
          </Text>
          <PlaceForm />
        </Box>

        <Box w={["100%", "100%", "100%", "60%"]}>
          <Text mb={5} variant="h3">
            Your reviews.
          </Text>

          <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing="40px">
            <MyReviews user={user} />
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
