import React from "react";
import {
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { QUERY_USER, QUERY_ME, QUERY_ME_REVIEWS } from "../utils/queries";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import PlaceForm from "../components/PlaceForm";
// import PlaceList from "../components/PlaceList";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  // const { loading2, data2 } = useQuery(QUERY_ME_REVIEWS, {
  //   // pass URL parameter
  //   variables: { reviewId: _id },
  // });

  const user = data?.me || data?.user || {};

  console.log(user);
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
      <Heading mb={5}>Hi {Auth.getProfile().data.username}!</Heading>
      <PlaceForm />
      <Heading as="h3" color="#7FE6D1" size="md" mt={10} mb={3}>
        Your reviews.
      </Heading>
      {/* <PlaceList places={user.places} /> */}
    </>
  );
};

export default Profile;
