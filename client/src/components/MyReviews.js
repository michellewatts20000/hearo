import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_MY_REVIEWS, QUERY_ME, QUERY_USER } from "../utils/queries";

const MyReviews = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  console.log("user", data);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Flex align="center" justify="space-between" wrap="wrap" w="100%" p={4}>
      <Text>list</Text>

      {console.log("2", data)}
      <Text>{user.username}</Text>
      <Text>{user.placeLocation}</Text>
      <Text>{user.placeRating}</Text>
      <Text>{user.placeComment}</Text>
    </Flex>
  );
};

export default MyReviews;
