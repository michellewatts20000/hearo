import React from "react";
import { Text } from "@chakra-ui/react";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import PlaceForm from "../components/PlaceForm";

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

     <PlaceForm />
    </>
  );
};

export default Profile;
