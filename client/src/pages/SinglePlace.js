import React from "react";
import { Heading, Text, Box, Stack, Spinner, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_PLACE_REVIEWS } from "../utils/queries";

const PlaceDetails = () => {
  // Use `useParams()` to retrieve value of the route parameter `:placeId`
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
      <Heading mb={5}>{place[0].place.placeName} reviews</Heading>
      <Text variant="h3">Type: {place[0].place.placeType}</Text>
        <Text variant="h3" mb={5}>Location: {place[0].place.placeLocation}</Text>
      </Box>

      <SimpleGrid columns={{sm: 1, md: 2, lg:4}} spacing={10}>
        {place.map((item, index) => (
          <Box p="10px"  border="1px solid" borderRadius="20px" borderColor="white" key={index}>
            <Text>Rating: {item.rating}</Text>
            <Text>Comment: {item.comment}</Text>
            <Text mb={5}>Date: {item.createdAt}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default PlaceDetails;
