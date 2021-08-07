import React from "react";
import { Heading, Text, Box, Stack, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_PLACE_REVIEWS } from "../utils/queries";

const PlaceDetails = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { placeId } = useParams();

  const { loading, data } = useQuery(QUERY_PLACE_REVIEWS, {
    variables: { placeId: placeId },
  });

  const place = data?.placeReviews || {};

  if (loading) {
    return <Spinner color="primary"/>
  }
  return (
    <Stack>
      <Box>
      <Heading mb={5}>{place[0].place.placeName} details</Heading>
        <Text>Location: {place[0].place.placeLocation}</Text>
        <Text mb={5}>Type: {place[0].place.placeType}</Text>
      </Box>
      <Box>
        {place.map((item, index) => (
          <Box key={index}>
            <Text>Rating: {item.rating}</Text>
            <Text>Comment: {item.comment}</Text>
            <Text mb={5}>Date: {item.createdAt}</Text>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default PlaceDetails;
