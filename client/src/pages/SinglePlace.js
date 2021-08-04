import React from "react";
import { Heading, Flex, Text, Box, Stack } from "@chakra-ui/react";
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

  const place = data?.placeReviews || {};

  // console.log("place", place);
  // console.log("place2", place.comment);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Stack>
      <Heading mb={10}>Single Place details</Heading>
      <Box>
        <Text>Name: {place[0].place.placeName}</Text>
        <Text>Location: {place[0].place.placeLocation}</Text>
        <Text>Type: {place[0].place.placeType}</Text>
      </Box>
      <Box>
        {place.map((item, index) => (
          <Box key={index}>
            <Text>Comment: {item.comment}</Text>
            <Text mb={5}>Rating: {item.rating}</Text>
          </Box>
        ))}
      </Box>
      ;
    </Stack>
  );
};

export default PlaceDetails;
