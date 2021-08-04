import React from "react";
import { Heading, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_PLACE_REVIEWS } from "../utils/queries";

const PlaceDetails = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { placeId } = useParams();

  const { loading, data } = useQuery(QUERY_PLACE_REVIEWS, {
    // pass URL parameter
    variables: { placeId: placeId },
  });

  const place = data?.place || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Flex align="center" justify="space-between" wrap="wrap" w="100%" p={4}>
      <Heading>HEARO Place details</Heading>
      <Text>{place.placeName}</Text>
      <Text>{place.placeLocation}</Text>
      <Text>{place.placeRating}</Text>
      <Text>{place.placeComment}</Text>
    </Flex>
  );
};

export default PlaceDetails;
